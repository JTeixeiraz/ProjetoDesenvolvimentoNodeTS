class Lab extends Sala {
    private numberOfPCS: number = 0;

    getPCS(): number {
        const result = this.numberOfPCS
        return result;
    }
    setPCS(pc: number): void {
        this.numberOfPCS = pc;
    }
}
