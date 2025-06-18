class StorageValues{
    private hashMap: {[Key:string]:number[]} = {};
    storaged:boolean = false;
    storage(hour:number, room:string){
        while (!this.storaged){
            if (!this.hashMap[room]){
                this.hashMap[room] = []
            }else{
                for (let i:number =0; i < this.hashMap[room].length; i++){
                    if (this.hashMap[room].includes(hour)){
                        console.log("Horario ja esta sendo utilizado")
                    }else{
                        this.hashMap[room].push(hour)
                        console.log(`Horario: ${hour} adicionado para a sala ${room}`)
                        console.log("========================")
                        this.hashMap[room].sort();
                        this.storaged = true;
                        return
                    }
                }
            }
        }
    }

    getStoraged():void{
        const nameroom: string = rl.question("Informe o nome da sala que deseja conferir a lista de agendamento: ")
        console.log("")
        for ( let i:number = 0; i < this.hashMap[nameroom].length; i++) {
            console.log(`Horario ${i}: ${this.hashMap[nameroom][i]}`)
        }
        console.log("========================")
    }

    deleteStoragedTime(room:string, hour:number){
        if (!this.hashMap[room]){
            console.log("Sala Inexistente no sistema!")
            return;
        }
        const index = this.hashMap[room].indexOf(hour);
        if (index> -1){
            this.hashMap[room].splice(index, 1);
            console.log(`Horario ${hour} deletado da sala ${room}`)
            return;
        }
    }
}
