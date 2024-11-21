//Define a classe Jogo 
class Jogo {          // Gabi
    constructor(grupos = null) {             // Gabi
        this.alunos = []; // Lista de alunos cadastrados-Gabi
        this.jogadores = []; // Lista de jogadores após o início do jogo - Alexandra
        this.grupos = null; // Quantidade total de grupos (padrão: 6) - Alexandra
        this.chat = new Chat(); // Gerencia o histórico de mensagens entre os jogadores - Jéssica 
    }
}

export default Jogo;

