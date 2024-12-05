// Jessica

import  cadastroRoutes from "/etapa03/src/routes/cadastroRoutes";  // Importa o módulo Router do Express
import { Router } from "express";  // Importa o módulo Router do Express

const rotas = Router();  // Cria uma instância (objeto) do Router para definir as rotas

// Rota inicial para verificar se o servidor funciona
rotas.get("/", (req, res) => {
  res.status(200).send("Servidor Servidor rodando e pronto para uso!");  // Retorna uma mensagem indicando que o servidor está funcionando
});

// Rota de tratamento de erros (caso a rota não seja encontrada)
rotas.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada." });  // Retorna um erro 404 se a rota não for reconhecida
});

export default rotas;  // Exporta as rotas definidas para uso em outro arquivo