export class Rider {
    constructor(
        public readonly id:string,
        private name:string,
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

     public rename(newName: string): void {
    if (!newName.trim()) throw new Error("Rider name cannot be empty");
    this.name = newName;
  }
}