import { PaymentMethod } from "./PaymentMethod";

export class CreditCardPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
        // Complex logic for credit card processing
    }
}

export class PayPalPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
        // Complex logic for PayPal processing
    }
}


export class UPIPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Processing UPI payment of $${amount}`);
        // Complex logic for UPI processing
    }
}