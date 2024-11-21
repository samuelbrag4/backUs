// Samuel

import Jogo from './Jogo.js'; // Importe a classe Jogo

// Criação de uma instância da classe Jogo
const jogo = new Jogo();

// Adiciona alguns alunos para teste
jogo.alunos.push({ nome: 'Ana', idade: 18 });
jogo.alunos.push({ nome: 'Pedro', idade: 20 });

// Adição de alguns jogadores para teste: 
jogo.jogadores.push({ nome: 'João', apelido: 'joao123' });
jogo.jogadores.push({ nome: 'Maria', apelido: 'maria456' });

// Teste do método verificarNomeExistente:
console.log(jogo.verificarNomeExistente('João')); // Deve retornar true
console.log(jogo.verificarNomeExistente('Pedro')); // Deve retornar false

// Teste do método verificarApelidoExistente:
console.log(jogo.verificarApelidoExistente('joao123')); // Deve retornar true
console.log(jogo.verificarApelidoExistente('pedro789')); // Deve retornar false

// Teste do método adicionarAluno:
// const novoAluno = jogo.adicionarAluno({ nome: 'Carlos', idade: 20 });
// console.log(novoAluno); // Deve retornar o objeto do novo aluno
// console.log(jogo.alunos); // Deve incluir o novo aluno na lista de alunos