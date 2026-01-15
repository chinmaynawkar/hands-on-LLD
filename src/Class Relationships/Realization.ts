// what realization is?
// in simple terms, it is a relationship between a class and an interface 
// it stats what can i do with the class, but not how to do it

// example:
interface Animal {
    makeSound(): void;
}

class Dog implements Animal {
    makeSound(): void {
        console.log("Woof");
    }
}

// suppose i have creditcardpayment and paypal payment that i want to implement the same interface
interface Payment {
    pay(amount:Number): void;
}

class CreditCardPayment implements Payment {
    pay(amount:Number): void {
        console.log(`Paying ${amount} with credit card`);
    }
}

class PayPalPayment implements Payment {
    pay(amount:Number): void {
        console.log(`Paying ${amount} with PayPal`);
    }
}

// now i can use the CreditCardPayment and PayPalPayment classes interchangeably
const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PayPalPayment();
creditCardPayment.pay(100);
paypalPayment.pay(100);