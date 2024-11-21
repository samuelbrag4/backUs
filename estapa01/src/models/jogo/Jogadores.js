class Jogadores {
    constructor(id, nome, nick, funcao) {
        this.id = id;
        this.nome = nome;
        this.nick = nick;
        this.funcao = funcao;
    }

    generateId() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}

export default Jogadores;