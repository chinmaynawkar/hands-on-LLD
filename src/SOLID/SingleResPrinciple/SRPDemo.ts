import { Employee } from "./SRP";
import { EmployeeRepository } from "./EmpRepo";
import { PaySlipCalc } from "./PaySlipCalc";
import { PayslipGenerator } from "./PayslipGen";
import { EmailService } from "./EmailPayslip";

/**
 * High-level demo orchestration for the Single Responsibility Principle example.
 *
 * Each collaborator has exactly one reason to change:
 * - Employee            → employee data
 * - EmployeeRepository  → persistence
 * - PaySlipCalc         → salary calculation rules
 * - PayslipGenerator    → document formatting
 * - EmailService        → email delivery
 */
export function runSRPDemo(): void {
  console.log("\n========== Single Responsibility Principle (SRP) Demo ==========\n");

  // Create an employee (entity with only data + getters)
  const employee = new Employee("John Doe", "john.doe@company.com", 50000);
  console.log(
    "Created employee:",
    employee.getName(),
    employee.getEmail(),
    employee.getSalary()
  );

  // 1. EmployeeRepository - ONLY handles data persistence
  const empRepo = new EmployeeRepository();
  empRepo.save(employee);

  // 2. PaySlipCalc - ONLY calculates the net pay
  const payCalc = new PaySlipCalc();
  const netPay = payCalc.calculatePaySlip(employee);
  console.log(`\nCalculated net pay: ₹${netPay}`);

  // 3. PayslipGenerator - ONLY formats the payslip document
  const payslipGen = new PayslipGenerator();
  const payslipDocument = payslipGen.generatePayslip(employee, netPay);
  console.log("\nGenerated payslip document:");

  // 4. EmailService - ONLY handles email sending
  const emailService = new EmailService();
  emailService.sendPayslip(employee, payslipDocument);
}

