class TeachersInfo {
    private Teachers:string[] = [];

    storageTeacher(name:string){
        if (this.Teachers.includes(name.toUpperCase())){
            console.log("Este professor já foi adicionado posteriormente!")
            return;
        }else{
            this.Teachers.push(name.toUpperCase())
            console.log(`Professor ${name} adicionado ao sistema com sucesso!`)
            return;
        }
    }

    getTeachers():void{
        console.log("======== Lista dos Professores Cadastrados ========")
        for (let i:number = 0; i < this.Teachers.length; i++) {
            console.log(`${i} - ${this.Teachers[i]}`)
        }
        console.log("===================================================")
    }

    deleteTeachers(name:string):void{
        if (!this.Teachers.includes(name.toUpperCase())){
            console.log("Este professor não está cadastrado no sistema!")
        }else{
            const index:number = this.Teachers.indexOf(name.toUpperCase());
            if (index> -1){
                this.Teachers.splice(index, 1);
                console.log(`Profissional ${name} deletado com sucesso.`);
                return;
            }
        }
    }
}
