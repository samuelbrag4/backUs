class Jogo {
    constructor(id, nome, jogadores, numero_jogadores) {
        this.id = id;
        this.nome = nome;
        this.jogadores = jogadores;
        this.numero_jogadores = numero_jogadores;
    }

    generateId() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}

export default Jogo;