import { PaymentProcessor } from "./PaymentProcessor";
import { PaymentMethod } from "./PaymentMethod";
import { CreditCardPayment, PayPalPayment, UPIPayment } from "./OnlinePayment";


export class CheckoutService {
    processPayment(method: PaymentMethod, amount: number): void {
        const processor = new PaymentProcessor();
        processor.processPayment(amount, method);
    }
}

//usage

const checkout = new CheckoutService();
checkout.processPayment(new CreditCardPayment(), 100);
checkout.processPayment(new PayPalPayment(), 100);
checkout.processPayment(new UPIPayment(), 500);