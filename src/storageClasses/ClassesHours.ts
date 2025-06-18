class storageValues{
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
                        this.hashMap[room].sort();
                        this.storaged = true;
                        return
                    }
                }
            }
        }
    }

    getStoraged():void{

    }

}
