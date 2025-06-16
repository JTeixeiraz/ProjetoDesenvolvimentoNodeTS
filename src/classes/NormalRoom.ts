    class NormalRoom extends Sala{
        private numberOfChairs:number = 0;
        getChairs():number{
            return this.numberOfChairs;
        }
        setCharis(chair:number){
            this.numberOfChairs = chair;
        }
    }
