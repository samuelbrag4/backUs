// import Aluno from '../aluno/Aluno'; // Importa a classe Aluno - Samuel
// import Chat from '../chat/Chat'; // Importa a classe Chat - Samuel

// Definição da classe Jogo  
class Jogo { // Criação da classe - Gabi

    // Não há necessidade de declarar os atributos agora, - Samuel
    // pois eles serão inicializados no construtor. - Samuel
    // Dessa forma, o JavaScript entende que estes atributos já existem. - Samuel

    constructor(grupos = null) { // Criação do constructor - Gabi
        this.alunos = []; // Lista de alunos cadastrados - Gabi
        this.jogadores = []; // Lista de jogadores após o início do jogo - Alexandra
        this.grupos = null; // Quantidade total de grupos (vazio) - Alexandra
        // this.chat = new Chat(); // Gerencia o histórico de mensagens entre os jogadores - Jéssica 
    }

    //Método para verificação de existe um jogador - Fernanda
    verificarNomeExistente(nome) { // Criação do método - Fernanda
        if (this.jogadores.some(jogador => jogador.nome === nome)) { // Verifica se o nome do jogador já está cadastrado - Fernanda
            console.log("Jogador já cadastrado"); // Mensagem de jogador já cadastrado - Fernanda
            return true;
        }
        return false;
    }

    //Método para verificação de existe um apelido - Souza
    verificarApelidoExistente(apelido) { // Criação do método - Souza
        if (this.jogadores.some(jogador => jogador.apelido === apelido)) { // Verifica se o apelido do jogador já está cadastrado - Souza
            console.log("Apelido já cadastrado"); // Mensagem de apelido já cadastrado - Souza
            return true;
        }
        return false;
    }

    //Método para adicionar um aluno - Nathalia
    adicionarAluno(aluno) { // Criação do método - Nathalia
        const novoAluno = new Aluno(aluno); // Cria um novo aluno - Nathalia
        this.alunos.push(novoAluno); // Adiciona o aluno na lista de alunos - Nathalia
        return novoAluno; // Retorna o novo aluno - Nathalia
    }

    // Método para adicionar um novo aluno à lista de alunos
adicionarAluno(aluno) {
    // Adiciona o aluno passado como argumento ao array ```javascript
    // Adiciona o aluno passado como argumento ao array de alunos
    this.alunos.push(aluno);
}

// Método para mostrar os alunos cadastrados, com opções de filtragem
mostrarAlunos(grupo = null, nome = null) {
    // Verifica se a lista de alunos está vazia
    if (this.alunos.length === 0) {
        throw new Error("Não há alunos cadastrados."); // Lança um erro se não houver alunos
    }

    // Filtra os alunos com base nos parâmetros de grupo e nome
    const alunosFiltrados = this.alunos.filter(
        (a) =>
            (!grupo || a.grupo == grupo) && // Verifica se o grupo é correspondente ou se não foi especificado
            (!nome || a.nome.toLowerCase() === nome.toLowerCase()) // Verifica se o nome é correspondente ou se não foi especificado
    );

    // Verifica se algum aluno foi encontrado após a filtragem
    if (alunosFiltrados.length === 0) {
        throw new Error("Nenhum aluno encontrado para os filtros especificados."); // Lança um erro se não houver alunos filtrados
    }

    // Agrupa os alunos filtrados por grupo
    const alunosAgrupados = alunosFiltrados.reduce((acc, aluno) => {
        const grupoKey = `Grupo ${aluno.grupo}`; // Cria uma chave para o grupo
        if (!acc[grupoKey]) acc[grupoKey] = []; // Inicializa o array para o grupo se não existir
        // Adiciona as informações do aluno ao grupo correspondente
        acc[grupoKey].push({
            Nome: aluno.nome,
            Apelido: aluno.apelido,
            EstaVivo: aluno.estaVivo,
            LocalAtual: aluno.localAtual,
        });
        return acc; // Retorna o acumulador atualizado
    }, {});

    // Cria um resultado final que contém a contagem de alunos por grupo
    const resultadoFinal = Object.entries(alunosAgrupados)
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)) // Ordena os grupos alfabeticamente
        .reduce((acc, [grupo, alunos]) => {
            const quantidade = alunos.length; // Conta quantos alunos estão no grupo
            // Adiciona a informação do grupo e a quantidade de alunos ao resultado
            acc[`${grupo} com ${quantidade} aluno${quantidade > 1 ? "s" : ""}`] = alunos;
            return acc; // Retorna o acumulador atualizado
        }, {});

    // Cria uma tabela para exibir os alunos filtrados no console
    const tabelaConsole = alunosFiltrados
        .sort((a, b) => {
            if (a.grupo === b.grupo) {
                return a.nome.localeCompare(b.nome); // Ordena por nome se os grupos forem iguais
            }
            return a.grupo - b.grupo; // Ordena por grupo
        })
        .map((aluno) => ({
            Grupo: aluno.grupo,
            Nome: aluno.nome,
            Apelido: aluno.apelido,
            Senha: aluno.pegarSenha(), // Chama o método para pegar a senha do aluno
            EstaVivo: aluno.estaVivo,
            LocalAtual: aluno.localAtual,
        }));

    // Exibe a tabela no console
    console.table(tabelaConsole);

    // Retorna o resultado final com os alunos agrupados
    return resultadoFinal;
}// Método para adicionar um novo aluno à lista de alunos
adicionarAluno(aluno) {
    // Adiciona o aluno passado como argumento ao array ```javascript
    // Adiciona o aluno passado como argumento ao array de alunos
    this.alunos.push(aluno);
}

// Método para mostrar os alunos cadastrados, com opções de filtragem
mostrarAlunos(grupo = null, nome = null) {
    // Verifica se a lista de alunos está vazia
    if (this.alunos.length === 0) {
        throw new Error("Não há alunos cadastrados."); // Lança um erro se não houver alunos
    }

    // Filtra os alunos com base nos parâmetros de grupo e nome
    const alunosFiltrados = this.alunos.filter(
        (a) =>
            (!grupo || a.grupo == grupo) && // Verifica se o grupo é correspondente ou se não foi especificado
            (!nome || a.nome.toLowerCase() === nome.toLowerCase()) // Verifica se o nome é correspondente ou se não foi especificado
    );

    // Verifica se algum aluno foi encontrado após a filtragem
    if (alunosFiltrados.length === 0) {
        throw new Error("Nenhum aluno encontrado para os filtros especificados."); // Lança um erro se não houver alunos filtrados
    }

    // Agrupa os alunos filtrados por grupo
    const alunosAgrupados = alunosFiltrados.reduce((acc, aluno) => {
        const grupoKey = `Grupo ${aluno.grupo}`; // Cria uma chave para o grupo
        if (!acc[grupoKey]) acc[grupoKey] = []; // Inicializa o array para o grupo se não existir
        // Adiciona as informações do aluno ao grupo correspondente
        acc[grupoKey].push({
            Nome: aluno.nome,
            Apelido: aluno.apelido,
            EstaVivo: aluno.estaVivo,
            LocalAtual: aluno.localAtual,
        });
        return acc; // Retorna o acumulador atualizado
    }, {});

    // Cria um resultado final que contém a contagem de alunos por grupo
    const resultadoFinal = Object.entries(alunosAgrupados)
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)) // Ordena os grupos alfabeticamente
        .reduce((acc, [grupo, alunos]) => {
            const quantidade = alunos.length; // Conta quantos alunos estão no grupo
            // Adiciona a informação do grupo e a quantidade de alunos ao resultado
            acc[`${grupo} com ${quantidade} aluno${quantidade > 1 ? "s" : ""}`] = alunos;
            return acc; // Retorna o acumulador atualizado
        }, {});

    // Cria uma tabela para exibir os alunos filtrados no console
    const tabelaConsole = alunosFiltrados
        .sort((a, b) => {
            if (a.grupo === b.grupo) {
                return a.nome.localeCompare(b.nome); // Ordena por nome se os grupos forem iguais
            }
            return a.grupo - b.grupo; // Ordena por grupo
        })
        .map((aluno) => ({
            Grupo: aluno.grupo,
            Nome: aluno.nome,
            Apelido: aluno.apelido,
            Senha: aluno.pegarSenha(),
            EstaVivo: aluno.estaVivo,
            LocalAtual: aluno.localAtual,
        }));

    // Exibe a tabela no console
    console.table(tabelaConsole);

    // Retorna o resultado final com os alunos agrupados
    return resultadoFinal;
}
}

// Jéssica

// Jéssica Prestelo - Criação da rota de remoção do aluno e da rota de iniciar votação;

import { Router } from "express";

const jogoRoutes = Router();

// Simulação de banco de dados em memória
let alunos = [
{ id: 1, nome: "Jéssica", status: "ativo" },
{ id: 2, nome: "Alexandra", status: "ativo" },
{ id: 3, nome: "Samuel", status: "ativo" },
];

let votaçãoIniciada = false; // Controla se a votação foi iniciada

// Rota para iniciar a votação
jogoRoutes.post("/iniciar-votacao", (req, res) => {
if (votaçãoIniciada) {
    return res.status(400).json({ error: "A votação já foi iniciada." }); // Se a votação já foi iniciada
}

  votaçãoIniciada = true; // Marca a votação como iniciada
return res.status(200).json({ message: "Votação iniciada com sucesso!" });
});

// Rota para remover um aluno da lista
jogoRoutes.delete("/remover-aluno/:id", (req, res) => {
  const { id } = req.params; // Encontra o ID do aluno a ser removido

  // Encontra o índice do aluno no array de alunos
const alunoIndex = alunos.findIndex((aluno) => aluno.id == id);

if (alunoIndex === -1) {
    return res.status(404).json({ error: "Aluno não encontrado." }); // Retorna erro 404 se o aluno não for encontrado
}

  // Remove o aluno da lista de alunos
alunos.splice(alunoIndex, 1);

  return res.status(204).send(); // Retorna 204 (No Content) mostrando que a remoção foi bem-sucedida
});

// Adição da rota que lista os alunos
jogoRoutes.get("/listar-alunos", (req, res) => {
  return res.json(alunos); // Retorna a lista de alunos
});


export default Jogo; // Jéssica