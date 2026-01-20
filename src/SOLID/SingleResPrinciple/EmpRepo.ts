import { Employee } from './SRP';

export class EmployeeRepository {
    save(employee: Employee): void {
        // Example: database logic
        console.log(`Saving employee ${employee.getName()} to database...`);
    }
}