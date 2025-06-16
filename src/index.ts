
const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

function main(): void{
    const diretoria = new Diretoria();

    rl.question("Oque deseja fazer?: \n 1- cadastrar aluno \n 2- Cadastrar sala\n", (resposta:string)=>{
        switch (resposta) {
            case "1":
                diretoria.cadastrarAluno();
                break;
            case"2":
                diretoria.cadastrar();
                break;
            default:
                break;
        }
    })
}

class Sala{
    nome:string = "";
    capacity:number = 0;
    horarios:number[] = [];
}

class Alunos{
    nome:string = "";
    idade:number = 0;
}

class Diretoria {
    cadastrar(): void {
        const sala = new Sala();
        const date = new Date();
        const horarioCadastro = date.getHours();
        const diaCadastro = date.getDate();
        const mesCadastro = date.getUTCMonth();

        rl.question("Nome da sala: ", (name: string) => {
            sala.nome = name;

            rl.question("Capacidade máxima da sala: ", (capacidadeStr: string) => {
                sala.capacity = Number(capacidadeStr);

                const getHorario = ()=>{
                    rl.question("Horario que sera utilizado: ", (horarioStr: string)=>{
                        const hour = Number(horarioStr);

                        if (sala.horarios.includes(hour)) {
                            console.log("Este horario ja esta sendo utilizado!")
                            getHorario();
                        }else{
                            sala.horarios.push(hour);
                            console.log(`Sala ${sala.nome} criada com sucesso`)
                            console.log(` - Data da criação: ${diaCadastro}/${mesCadastro} \n - Horario da criação: ${horarioCadastro}`);
                            rl.close();
                        }
                    })
                }
                getHorario();
            });
        });
    }

    cadastrarAluno():void{
        const aluno = new Alunos();
        rl.question("Informe o nome do aluno: ", (nomeAluno:string)=>{
            aluno.nome = nomeAluno;
            rl.question("Informe a idade do aluno: ", (idadeAluno:number)=>{
                aluno.idade = idadeAluno;
                
                console.log(`Aluno ${aluno.nome} cadastrado com sucesso`);
                rl.close();
            })
        })
    }

}



main();