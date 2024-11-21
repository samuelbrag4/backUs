// Definição da classe Jogo  
class Jogo { // Criação da classe - Gabi

    // Não há necessidade de declarar os atributos agora, - Samuel
    // pois eles serão inicializados no construtor. - Samuel
    // Dessa forma, o JavaScript entende que estes atributos já existem. - Samuel

    constructor(grupos = null) { // Criação do constructor - Gabi
        this.alunos = []; // Lista de alunos cadastrados - Gabi
        this.jogadores = []; // Lista de jogadores após o início do jogo - Alexandra
        this.grupos = null; // Quantidade total de grupos (vazio) - Alexandra
        this.chat = new Chat(); // Gerencia o histórico de mensagens entre os jogadores - Jéssica 
    }
};

//Método para verficação de existe um jogador - Fernanda
verificarNomeExistente(nome); { // Criação do método - Fernanda
    return this.jogadores.some(jogador => jogador.nome === nome); // Verifica se o nome do jogador já está cadastrado - Fernanda

    if (jogador.nome === nome) { // Condição para verificar se o jogador já está cadastrado - Fernanda
        console.log("Jogador já cadastrado"); // Mensagem de jogador já cadastrado - Fernanda
    } else { // Condição para verificar se o jogador não está cadastrado - Fernanda
        console.log("Jogador não cadastrado"); // Mensagem de jogador não cadastrado - Fernanda
    }

    //Método para verficação de existe um apelido - Souza
    verificarApelidoExistente(apelido); { // Criação do método - Souza

        if (jogador.apelido !== apelido) { // Condição para verificar se o apelido do jogador já está cadastrado - Souza
            console.log("Apelido já cadastrado"); // Mensagem de apelido já cadastrado - Souza
        }

        return this.jogadores.some(jogador => jogador.apelido === apelido); // Verifica se o apelido do jogador já está cadastrado - Souza
    }
};

export default Jogo; // Jéssica