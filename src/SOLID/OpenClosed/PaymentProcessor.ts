import { PaymentMethod } from "./PaymentMethod";

export class PaymentProcessor {
    processPayment(amount : number, method : PaymentMethod): void {
        method.processPayment(amount);
    }
}