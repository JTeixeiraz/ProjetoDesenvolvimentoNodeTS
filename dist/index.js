"use strict";
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
function main() {
    const diretoria = new Diretoria();
    diretoria.cadastrar();
}
class Sala {
    constructor() {
        this.nome = "";
        this.capacity = 0;
        this.horarios = [];
    }
}
class Diretoria {
    cadastrar() {
        const sala = new Sala();
        const date = new Date();
        const horarioCadastro = date.getHours();
        const diaCadastro = date.getDate();
        const mesCadastro = date.getUTCMonth();
        rl.question("Nome da sala: ", (name) => {
            sala.nome = name;
            rl.question("Capacidade máxima da sala: ", (capacidadeStr) => {
                sala.capacity = Number(capacidadeStr);
                const getHorario = () => {
                    rl.question("Horario que sera utilizado: ", (horarioStr) => {
                        const hour = Number(horarioStr);
                        if (sala.horarios.includes(hour)) {
                            console.log("Este horario ja esta sendo utilizado!");
                            getHorario();
                        }
                        else {
                            sala.horarios.push(hour);
                            console.log(`Sala ${sala.nome} criada com sucesso`);
                            console.log(` - Data da criação: ${diaCadastro}/${mesCadastro} \n - Horario da criação: ${horarioCadastro}`);
                            rl.close();
                        }
                    });
                };
                getHorario();
            });
        });
    }
}
main();
