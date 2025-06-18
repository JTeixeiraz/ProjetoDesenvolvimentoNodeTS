class Diretoria{
    private professores:TeachersInfo = new TeachersInfo();
    private salasDeAula:Sala = new Sala();
    private classRooms:Classrooms = new Classrooms()


    cadastrarProfessor(): void {
        const name: string = rl.question("Informe o nome do profissional: ");
        this.professores.storageTeacher(name);
    }
    listarProfessores():void{
        this.professores.getTeachers();
    }
    deletarProfessores():void{
        const name:string = rl.question("Digite o nome do Professor que será deletado: ")
        this.professores.deleteTeachers(name)
    }

    cadastrarSala():void{
        const classname:string = rl.question("Informe o nome da sala: ")
        this.salasDeAula.setName(classname);
        const capacity:number =  rl.question("Informe a capacidade maxima da sala: ")
        this.salasDeAula.setCapacity(capacity)
        this.classRooms.storage(classname, capacity)
        console.log(`Sala ${this.salasDeAula.getName()} adicionada ao sistema!`)
    }

}
