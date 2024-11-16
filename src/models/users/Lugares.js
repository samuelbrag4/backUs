class Lugares {
    constructor(id, nome, saidas, esconderijos) {
        this.id = id;
        this.nome = nome;
        this.saidas = saidas;
        this.esconderijos = esconderijos;
    }

    generateId() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}

export default Lugares;