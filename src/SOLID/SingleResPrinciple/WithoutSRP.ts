class Employee {
    private name: string;
    private email: string;
    private salary: number;

    constructor(name: string, email: string, salary: number) {
        this.name = name;
        this.email = email;
        this.salary = salary;
    }
    
    // Constructor, getters, setters...
    
    calculateSalary(): void {
        // Complex salary calculation logic
        // Includes tax calculations
    }
    
    saveToDatabase(): void {
        // Connect to database
        // Prepare SQL
        // Execute query
    }
    
    generatePayslip(): void {
        // Format payslip
        // Add company logo
        // Convert to PDF
    }
    
    sendPayslipEmail(): void {
        // Connect to email server
        // Create email with attachment
        // Send email
    }
}