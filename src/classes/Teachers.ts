class Teachers {
    storage:StorageValues = new StorageValues()

    cadastrarSala():void{
        const classname:string = rl.question("Informe o nome da sala que deseja reservar: ")
        const classhour:number = rl.question("Informe o horario que deseja ocupar a sala(valor unitario da hora do dia):")
        this.storage.storage(classhour, classname);
    }
    exibirReservas():void{
        this.storage.getStoraged()
    }

    cancelarReserva():void{
        const classname:string = rl.question("Informe o nome da sala que você realizou a reserva: ");
        const classhour:number = rl.question("Informe o horario da sua reserva: ");
        this.storage.deleteStoragedTime(classname, classhour);
    }
}
