import { Employee } from './SRP';

export class PayslipGenerator {
    generatePayslip(employee: Employee, netPay: number): string {
        return `Payslip for: ${employee.getName()}\n` +
               `Email: ${employee.getEmail()}\n` +
               `Net Pay: ₹${netPay}\n` +
               `----------------------------\n`;
    }
}