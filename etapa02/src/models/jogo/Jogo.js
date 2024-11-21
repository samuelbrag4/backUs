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

    //Método para verficação de existe um jogador - Fernanda
    verificarNomeExistente(nome) { // Criação do método - Fernanda
        if (this.jogadores.some(jogador => jogador.nome === nome)) { // Verifica se o nome do jogador já está cadastrado - Fernanda
            console.log("Jogador já cadastrado"); // Mensagem de jogador já cadastrado - Fernanda
            return true;
        }
        return false;
    }

    //Método para verficação de existe um apelido - Souza
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
}

export default Jogo; // Jéssica