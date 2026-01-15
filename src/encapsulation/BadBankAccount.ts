//  Exercise 1 : bad example without encapsulation
export class BadBankAccount {
    balance:number = 0;

    /*
Problems:
1. No validation
2. Any code can break business rules
3. No single place controlling balance changes
4. Impossible to trust the object's state
*/
}

// Totally allowed if public
// const account = new BadBankAccount();

// account.balance = 200;
// account.balance = -300;

// console.log(account.balance);


// Questions to answer (write answers in comments)

// Why is this dangerous?
// Answer : anybody can set the balance to any value, including negative values

// Where should validation live?
// Answer : the BadBankAccount class should validate the balance before setting it
// If the balance is negative, it should not be set


// Who is responsible for keeping balance valid?
// Answer : the BadBankAccount class is responsible for keeping the balance valid
// It should not be possible to set the balance to a negative value

// --------------------------------------------------- //




//  Exercise 2 : with encapsulation
export class GoodBankAccount {
    private balance:number = 0;

    // read only property to access the balance
    public getBalance(): number {
        return this.balance;
    }
    // method to deposit balance 
    public deposit(amount:number):void {
        if(amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
    }
    // method to withdraw balance
    public withdraw(amount:number):void {
        if(amount <= 0) {
            throw new Error("Withdraw amount must be positive");
        }
        if(!this.hasSufficientBalance(amount)) {
            throw new Error("Insufficient balance");
        }
        if(amount <= 0) {
            throw new Error("Withdraw amount must be positive");
        }
        this.balance -= amount;
    }
    // method to check if the account has sufficient balance
    public hasSufficientBalance(amount:number):boolean {
        return this.balance >= amount;
    }

    /*
Why no setter?
Because balance should NEVER be arbitrarily set.
Only domain actions (deposit/withdraw) should change it.
*/

}

// Exercise 3 : private method helper
export class BankAccount {
  /*
    Private methods:
- Reduce duplication
- Hide internal logic
- Improve readability
    */
    private balance:number = 0;

    public deposit(amount:number):void {
        this.validateAmount(amount);
        this.balance+=amount;
        }

    public withdraw(amount:number): void {
        this.validateAmount(amount);
        this.ensureSufficientBalance(amount);
        this.balance-=amount;
    }
        

    private validateAmount(amount:number):void {
        if(amount <= 0) {
            throw new Error("Amount must be positive");
        }
    }

    private ensureSufficientBalance(amount:number): void {
        if(amount > this.balance ){
            throw new Error("Insufficient balance");
        }
    }
}
