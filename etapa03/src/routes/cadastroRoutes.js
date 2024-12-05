// Alexandra

import { Router } from "express";

const cadastroRoutes = Router(); 

let registros = []; // Array para armazenar registros 

cadastroRoutes.post("/adicionar", (req, res) => {
  const { nome, email } = req.body; // Extrai "nome" e "email" do corpo da requisição

  // Validação: verifica se os campos obrigatórios estão presentes
  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" }); // Retorna erro 400 (Bad Request) se faltarem dados
  }

  // Cria um novo registro com um ID único (baseado no tamanho do array)
  const novoRegistro = { id: registros.length + 1, nome, email };
  registros.push(novoRegistro); // Adiciona o novo registro ao "banco de dados" simulado

  return res.status(201).json(novoRegistro); 
});

cadastroRoutes.get("/listar", (req, res) => {
  return res.json(registros); // Retorna todos os registros em formato JSON
});

cadastroRoutes.put("/atualizar/:id", (req, res) => {
  const { id } = req.params; // Obtém o ID do registro da URL
  const { nome, email } = req.body; // Obtém os dados para atualização do corpo da requisição

  // Encontra o registro correspondente pelo ID
  const registro = registros.find((r) => r.id === parseInt(id));

  // Verifica se o registro existe
  if (!registro) {
    return res.status(404).json({ error: "Registro não encontrado" }); // Retorna erro 404 (Not Found) se o registro não for encontrado
  }

  // Atualiza os campos do registro, se os novos valores foram fornecidos
  if (nome) registro.nome = nome;
  if (email) registro.email = email;

  return res.json(registro); // Retorna o registro atualizado
});

cadastroRoutes.delete("/remover/:id", (req, res) => {
  const { id } = req.params; // Obtém o ID do registro da URL

  // Encontra o índice do registro no array
  const index = registros.findIndex((r) => r.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Registro não encontrado" }); 
  }

  registros.splice(index, 1); // Remove o registro do array

  return res.status(204).send(); 
});

export default cadastroRoutes; 