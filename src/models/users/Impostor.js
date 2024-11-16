import Jogadores from './Jogadores.js'; // Importa a classe Jogadores do arquivo Jogadores.js

// Define a classe Impostor que estende a classe Jogadores
class Impostor extends Jogadores {
    // Construtor da classe Impostor
    constructor(id, nome, nick, funcao, habilidadeEspecial) {
        super(id, nome, nick, funcao); // Chama o construtor da classe pai (Jogadores)
        this.habilidadeEspecial = habilidadeEspecial; // Define a habilidade especial do impostor
    }

}

export default Impostor;