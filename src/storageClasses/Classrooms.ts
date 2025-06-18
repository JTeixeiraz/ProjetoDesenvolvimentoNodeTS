class Classrooms extends Sala{
    private namesClasses:{nome:string, capacity:number}[] = [];

    storage(name:string, capacity:number):void{

        if (this.namesClasses.some(sala => sala.nome === name)){
            console.log("Essa sala já esta cadastrada no sistema!")
            return;
        }else{
            this.namesClasses.push({nome: name, capacity: capacity})
            console.log("Sala adicionada com sucesso!")
            return;
        }

    }

}
