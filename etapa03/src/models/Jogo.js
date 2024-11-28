// Nathalia Santos Ferreira 

import Sabotador from "./Sabotador.js";
import Dev from "./Dev.js";
import Chat from "./Chat.js";
import Quiz from "./Quiz.js";

class Jogo {
    constructor () {
        this.alunos = [];
        this.jogadores = [];
        this.grupos = 6;
        this.chat = new Chat();
        this.timerVotacao = null; 
        this.votacaoAtiva = false;
        this.quizzes = new Quiz();
    }

    verificarNomeExistente(nome) {
        if (/\d/.test(nome))  { 
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
            throw new Error (`Aluno com nome ${nome} já cadastrado. Escolha outro nome.`) 
        }
    }
//Fernanda Alves
    verificarApelidoExistente(apelido) {
        const apelidoExistente = this.alunos.some(
            (a) => String(a.apelido) === String(apelido)
        );
        if (apelidoExistente) {
            throw new Error (`Aluno com apelido ${apelido} já existe. Escolha outro.`)
        }
    }
}

export default Jogo;