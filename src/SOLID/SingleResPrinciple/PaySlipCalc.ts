import { Employee } from './SRP';

export class PaySlipCalc {
    calculatePaySlip(employee: Employee): number {
        const base = employee.getSalary();
        const tax = base * 0.2;
        const benefits = 1000;
        return base - tax + benefits;
    }
}