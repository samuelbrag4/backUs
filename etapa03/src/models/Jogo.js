// Nathalia Santos Ferreira 

import Sabotador from "./Sabotador.js";
import Dev from "./Dev.js";
import Chat from "./Chat.js";
import Quiz from "./Quiz.js";

class Jogo {
    constructor() {
        this.alunos = [];
        this.jogadores = [];
        this.grupos = 6;
        this.chat = new Chat();
        this.timerVotacao = null;
        this.votacaoAtiva = false;
        this.quizzes = new Quiz();
    }

    verificarNomeExistente(nome) {
        if (/\d/.test(nome)) {
          throw new Error("Nome não pode conter números. Escolha outro.");
        }
    
        const nomeExistente = this.alunos.some(
          (a) => a.nome.toLowerCase() === nome.toLowerCase()
        );
        if (nomeExistente) {
          throw new Error(`Aluno com nome ${nome} já existe. Escolha outro.`);
        }
      }

    verificarNomeExistente(nome) {
        if (/\d/.test(nome)) {
            // A expressão "/\d/" é utilizada para encontrar dígitos numéricos dentro de uma string.
            throw new Error("Nome não pode conter números")
            // O "throw" é utilizado para lançar uma exceção.
            // O "new Error()" é utilizado para criar um objeto de erro e logo a frente é passada a mensagem de erro.
        }

        const nomeExistente = this.alunos.some(
            // O método "some()" testa se pelo menos um elemento do array de alunos satisfaz a condição.
            (a) => a.nome.toLowerCase() === nome.toLowerCase()
            // O método "toLowerCase()" é utilizado para converter a string para minúsculas.
            // É necessário converter as strings para minúsculas para que a comparação não de nenhum erro devido a diferença de maiúsculas e minúsculas.
        );

        if (nomeExistente) {
            throw new Error(`Aluno com nome ${nome} já cadastrado. Escolha outro nome.`)
        }
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

export default Jogo;