export class Employee {
    private name:string;
    private email:string;
    private salary:number;

    constructor(name: string, email: string, salary: number) {
        this.name = name;
        this.email = email;
        this.salary = salary;
    }

     getName(): string {
        return this.name;
     }

     getEmail(): string {
        return this.email;
     }

     getSalary(): number {
        return this.salary;
     }
     
     
}