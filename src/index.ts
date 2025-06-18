
  const readline = require('node:readline');
  const { stdin: input, stdout: output } = require('node:process');
  const rl = readline.createInterface({ input, output });
  const admin:Diretoria = new Diretoria();
  const user:Teachers = new Teachers();

  main();
  function main(): void {
    let sair:boolean = false;
    console.log("=============================")
    console.log("====   Sistema Escolar   ====")
    console.log("=============================")
    while (!sair){
      const choice:string = rl.question("1- Logar como Diretoria \n2-Logar como Professor\n 3-Sair\n")
      switch (choice) {
        case"1":
            adm();
          break;
        case "2":
            teacher();
          break;
        case "3":
          sair = true
          break;
        default:
          console.log("informe um valor valido")
            console.clear()
          break;
      }
    }
  }


  function teacher():void{
    console.clear();
    const choice:string = rl.question(" 1- Fazer reserva\n 2- Exibir todas as reservas\n 3- Cancelar uma reserva")
    switch (choice) {
      case "1":
        user.cadastrarSala();
        break;
      case "2":
        user.exibirReservas();
        break;
      case "3":
        user.cancelarReserva();
        break;
      default:
        console.log("Opção inválida");
        break;
    }
    rl.question("Pressione ENTER")
    console.clear();
  }

  function adm():void{
    console.clear()
    const choice:string = rl.question(" 1- Cadastrar Professor \n 2- Listar Professores \n 3- Deletar Professores \n 4-Cadastrar sala \n")
    switch (choice) {
      case "1":
        admin.cadastrarProfessor()
        break;
      case "2":
        admin.listarProfessores()
        break;
      case "3":
        admin.deletarProfessores()
        break;
      case "4":
        admin.cadastrarSala()
        break;
      default:
        console.log("Opção inválida");
        break;
    }
    rl.question("Pressione ENTER")
    console.clear()
  }




