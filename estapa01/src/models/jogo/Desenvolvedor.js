import Jogadores from './Jogadores.js';

class Desenvolvedor extends Jogadores {
    constructor(id, nome, nick, funcao, tasks_feitas) {
        super(id, nome, nick, funcao);
        this.tasks_feitas = tasks_feitas;
    }
}

export default Desenvolvedor;