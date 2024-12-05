// Nathalia Santos Ferreira 

import Sabotador from "./Sabotador.js";
import Dev from "./Dev.js";
import Chat from "./Chat.js";
import Quiz from "./Quiz.js";

class Jogo {
    constructor() {
        this.alunos = [];
        this.jogadores = [];
        this.grupos = 6;
        this.chat = new Chat();
        this.timerVotacao = null;
        this.votacaoAtiva = false;
        this.quizzes = new Quiz();
    }

    verificarNomeExistente(nome) {
        if (/\d/.test(nome)) {
            // A expressão "/\d/" é utilizada para encontrar dígitos numéricos dentro de uma string.
            throw new Error("Nome não pode conter números");
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
            throw new Error(`Aluno com nome ${nome} já cadastrado. Escolha outro nome.`);
        }
    }

    //Fernanda Alves
    verificarApelidoExistente(apelido) {
        const apelidoExistente = this.alunos.some(
            (a) => String(a.apelido) === String(apelido)
        );
        if (apelidoExistente) {
            throw new Error(`Aluno com apelido ${apelido} já existe. Escolha outro.`);
        }
    }

    // Método para adicionar um novo aluno à lista de alunos - Sara
    adicionarAluno(aluno) {
        // Adiciona o aluno passado como argumento ao array ```javascript
        // Adiciona o aluno passado como argumento ao array de alunos
        this.alunos.push(aluno);
    }

    // Método para mostrar os alunos cadastrados, com opções de filtragem - Sara
    mostrarAlunos(grupo = null, nome = null) {
        // Verifica se a lista de alunos está vazia
        if (this.alunos.length === 0) {
            throw new Error("Não há alunos cadastrados."); // Lança um erro se não houver alunos
        }
        // Filtra os alunos com base nos parâmetros de grupo e nome
        const alunosFiltrados = this.alunos.filter(
            (a) =>
                (!grupo || a.grupo == grupo) && // Verifica se o grupo é correspondente ou se não foi especificado
                (!nome || a.nome.toLowerCase() === nome.toLowerCase()) // Verifica se o nome é correspondente ou se não foi especificado
        );
        // Verifica se algum aluno foi encontrado após a filtragem
        if (alunosFiltrados.length === 0) {
            throw new Error("Nenhum aluno encontrado para os filtros especificados."); // Lança um erro se não houver alunos filtrados
        }
        // Agrupa os alunos filtrados por grupo
        const alunosAgrupados = alunosFiltrados.reduce((acc, aluno) => {
            const grupoKey = `Grupo ${aluno.grupo}`; // Cria uma chave para o grupo
            if (!acc[grupoKey]) acc[grupoKey] = []; // Inicializa o array para o grupo se não existir
            // Adiciona as informações do aluno ao grupo correspondente
            acc[grupoKey].push({
                Nome: aluno.nome,
                Apelido: aluno.apelido,
                EstaVivo: aluno.estaVivo,
                LocalAtual: aluno.localAtual,
            });
            return acc; // Retorna o acumulador atualizado
        }, {});
        // Cria um resultado final que contém a contagem de alunos por grupo
        const resultadoFinal = Object.entries(alunosAgrupados)
            .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)) // Ordena os grupos alfabeticamente
            .reduce((acc, [grupo, alunos]) => {
                const quantidade = alunos.length; // Conta quantos alunos estão no grupo
                // Adiciona a informação do grupo e a quantidade de alunos ao resultado
                acc[`${grupo} com ${quantidade} aluno${quantidade > 1 ? "s" : ""}`] = alunos;
                return acc; // Retorna o acumulador atualizado
            }, {});
        // Cria uma tabela para exibir os alunos filtrados no console
        const tabelaConsole = alunosFiltrados
            .sort((a, b) => {
                if (a.grupo === b.grupo) {
                    return a.nome.localeCompare(b.nome); // Ordena por nome se os grupos forem iguais
                }
                return a.grupo - b.grupo; // Ordena por grupo
            })
            .map((aluno) => ({
                Grupo: aluno.grupo,
                Nome: aluno.nome,
                Apelido: aluno.apelido,
                Senha: aluno.pegarSenha(), // Chama o método para pegar a senha do aluno
                EstaVivo: aluno.estaVivo,
                LocalAtual: aluno.localAtual,
            }));
        // Exibe a tabela no console
        console.table(tabelaConsole);
        // Retorna o resultado final com os alunos agrupados
        return resultadoFinal;
    }

    // Rota para remover aluno - Jéssica

    // Método para remover  aluno
    removerAluno(nome) {

        // Encontra o aluno com o nome especificado
        const index = this.alunos.findIndex(a => a.nome.toLowerCase() === nome.toLowerCase());

        // Verifica se o aluno foi encontrado
        if (index === -1) {
            throw new Error(`Aluno com nome ${nome} não encontrado.`); // Fala há um erro caso o aluno não exista
        }

        // Remove o aluno da lista de alunos
        this.alunos.splice(index, 1);

        // Retorna uma mensagem confirmando a remoção
        return `Aluno ${nome} removido com sucesso!.`;
    }

        // Rota para mostrar jogadores - Gabriela
        mostrarJogadores(dados) {
            const tabelaComInstancia = dados.map((d) => {
              const {
                grupo,
                nome,
                apelido,
                estaVivo,
                localAtual,
                tempoDesocupado,
                votos,
              } = d;
              return {
                Grupo: grupo,
                Nome: nome,
                Apelido: apelido,
                Senha: d.pegarSenha(),
                LocalAtual: localAtual,
                Votos: votos,
                TempoDesocupado: tempoDesocupado,
                EstaVivo: estaVivo,
                Tipo: d.constructor.name,
              };
            });
        
            console.table(tabelaComInstancia);
          }

        // Rota para iniciar jogo - Samuel
        iniciarJogo() {
            // Escolhe aleatoriamente um grupo para ser o grupo dos sabotadores do jogo
            const grupoEscolhido = Math.floor(Math.random() * this.grupos) + 1;

            // Itera sobre a lista de alunos para definir o papel de cada aluno que está jogando
            this.alunos.forEach((aluno) => {
                let jogador;

                // Se o aluno pertence ao grupo escolhido, ele é um Sabotador
                if (aluno.grupo === grupoEscolhido) {
                    jogador = new Sabotador(aluno);
                } else {
                    // Caso contrário, ele é um Dev
                    jogador = new Dev(aluno);
                }

                // Adiciona o jogador (Sabotador ou Dev) à lista de jogadores
                this.jogadores.push(jogador);
            });

            // Exibe a lista de jogadores com seus respectivos papéis
            this.mostrarJogadores(this.jogadores);
        };

        // Rota para encontrar jogador por senha - Nathalia

        // Rota para ver o papel - Samuel
        verPapel(senha) {
            // Encontra o jogador correspondente à senha que foi fornecida
            const jogador = this.encontrarJogadorPorSenha(senha);

            // Verifica se o jogador foi encontrado. Caso não, mostra um erro
            if (!jogador) {
                // Mostra um erro indicando que a senha é inválida ou o jogador não foi encontrado
                throw new Error("Senha inválida ou jogador não encontrado.");
                // O "throw new Error()" interrompe a execução e retorna uma mensagem de erro
            }

            // Retorna o papel do jogador encontrado (Sabotador ou Dev)
            return jogador.mostrarPapel();
        };

        // Rota para verificar se está ativo - Sara

        // Rota para iniciar votação - Jessica

        iniciarVotacao() {
            if (this.votacaoAtiva) {
              throw new Error(
                "Votação já em andamento. Corra para o Auditório, discuta no Chat e decida seu voto antes de encerrar a votação!!!"
              );
            }
          
            this.votacaoAtiva = true;
          
            // Marcar os jogadores vivos com o símbolo de votação
            this.jogadores.forEach((j) => {
              if (j.estaVivo) {
                j.apelido += " - 🗳️";  // Adiciona o ícone de votação ao apelido
              }
            });
          
            // Configurar o timer para encerrar a votação após 6 minutos
            this.timerVotacao = setTimeout(() => {
              console.log("A votação foi encerrada automaticamente após 6 minutos.");
              // A lógica para lidar com o encerramento pode ser implementada aqui, se necessário
            }, 6 * 60 * 1000); // 6 minutos em milissegundos
          }
          
         

        // Rota para encerrar votação - Alexandra
        encerrarVotacao() {
            // Verifica se há uma votação ativa
            if (!this.votacaoAtiva) {
                throw new Error("Não há votação ativa no momento para encerrar.");
            }
        
            // Calcula o número máximo de votos entre os jogadores vivos
            const maxVotos = Math.max(...this.jogadores.map((j) => j.votos || 0));
        
            // Filtra os jogadores que possuem o número máximo de votos e estão vivos
            const maisVotados = this.jogadores.filter(
                (j) => j.votos === maxVotos && j.estaVivo
            );
        
            // Se houver mais de um jogador empatado, pode ser adicionada uma regra extra
            if (maisVotados.length > 1) {
                console.log("Empate na votação! Nenhum jogador foi eliminado.");
            } else {
                // Marca os jogadores mais votados como eliminados
                maisVotados.forEach((jogador) => {
                    jogador.estaVivo = false; // Marca o jogador como morto
                    console.log(`O jogador ${jogador.nome} foi eliminado!`);
                });
            }
        
            // Reseta os votos de todos os jogadores e atualiza os apelidos
            this.jogadores.forEach((j) => {
                j.votos = 0; // Zera os votos
                j.apelido = j.apelido.replace(" - 🗳️", ""); // Remove o indicador de voto
                if (!j.estaVivo) {
                    // Marca os jogadores mortos com o ícone "💀"
                    j.apelido = j.apelido.includes("💀") ? j.apelido : j.apelido + " - 💀";
                }
            });
        
            // Marca a votação como encerrada
            this.votacaoAtiva = false;
        
            // Limpa o temporizador da votação, se existir
            if (this.timerVotacao) {
                clearTimeout(this.timerVotacao);
                this.timerVotacao = null;
            }
        
            // Reseta o chat após a votação
            this.chat.mensagens = [];
        
            // Mostra a lista atualizada de jogadores
            this.mostrarJogadores(this.jogadores);
        }
    }

export default Jogo;