import { Router } from "express";  // Importa o módulo Router do Express

const rotas = Router();  // Cria uma instância (objeto) do Router para definir as rotas

// Rota inicial para verificar se o servidor funciona
rotas.get("/", (req, res) => {
  res.status(200).send("Servidor Servidor rodando e pronto para uso!");  // Retorna uma mensagem indicando que o servidor está funcionando
});

// Rota de cadastro
let registros = [];  // Array para armazenar os registros de usuários

// Rota POST -  Adiciona um novo registro
rotas.post("/cadastro/adicionar", (req, res) => {
  const { nome, email } = req.body;  // Extrai o nome e o email 

  // Valida se os campos nome e email foram fornecidos
  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });  // Retorna um erro 400 se algum campo estiver sem nenhuma escrita
  }

  // Cria um novo registro com ID único (baseado no tamanho do array)
  const novoRegistro = { id: registros.length + 1, nome, email };
  registros.push(novoRegistro);  // Adiciona o novo registro no array "registros"

  return res.status(201).json(novoRegistro);  // Retorna o novo registro com status 201 ( ele foi criado)
});

// Rota GET - Listar todos os registros
rotas.get("/cadastro/listar", (req, res) => {
  return res.json(registros);  // Retorna a lista de registros armazenados
});

// Rota PUT para atualizar um registro existente com base no ID
rotas.put("/cadastro/atualizar/:id", (req, res) => {
  const { id } = req.params;  // Obtém o ID do registro da URL
  const { nome, email } = req.body;  // Obtém os dados para atualização do corpo da requisição

  // Encontra o registro com o ID correspondente
  const registro = registros.find((r) => r.id === parseInt(id));

  // Verifica se o registro existe
  if (!registro) {
    return res.status(404).json({ error: "Registro não encontrado" });  // Retorna erro 404 caso o registro não seja encontrado
  }

  // Atualiza os campos do registro, caso novos valores tenham sido fornecidos
  if (nome) registro.nome = nome;
  if (email) registro.email = email;

  return res.json(registro);  // Retorna o registro atualizado
});

// Rota DELETE para remover um registro com base no ID
rotas.delete("/cadastro/remover/:id", (req, res) => {
  const { id } = req.params;  // Obtém o ID do registro da URL

// Encontra o registro pelo ID e remove diretamente
const registro = registros.find((r) => r.id === parseInt(id));

if (!registro) {
  return res.status(404).json({ error: "Registro não encontrado" });  // Retorna erro 404 caso o registro não seja encontrado
}

// Remove o registro do array
registros = registros.filter((r) => r.id !== parseInt(id));

return res.status(204).send();  // Retorna status 204 (Sem conteúdo) após remover o registro

  registros.splice(index, 1);  // Remove o registro do array

  return res.status(204).send();  // Retorna status 204  após remover o registro
});

// Rota de tratamento de erros (caso a rota não seja encontrada)
rotas.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada." });  // Retorna um erro 404 se a rota não for reconhecida
});

export default rotas;  // Exporta as rotas definidas para uso em outro arquivo