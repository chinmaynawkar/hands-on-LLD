import { Employee } from './SRP';

export class EmailService {
    sendPayslip(employee: Employee, payslip: string): void {
        console.log(`Sending payslip to: ${employee.getEmail()}`);
        // Simulate email with a print
        console.log(payslip);
    }
}