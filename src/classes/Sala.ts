class Sala {
    private nome: string = "";
    private capacity: number = 0;
    horarios: number[] = [];

    getName(): string {
        const result: string = this.nome;
        return result;
    }
    setName(name: string): void {
        this.nome = name;
    }

    getCapacity(): number {
        const result: number = this.capacity
        return result;
    }
    setCapacity(capacity: number): void {
        this.capacity = capacity;
    }
}
