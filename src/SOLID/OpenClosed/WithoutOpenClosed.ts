class PaymentProcessor {
    processCreditCardPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
        // Complex logic for credit card processing
    }
}

class CheckoutService {
    processPayment(): void {
        const processor = new PaymentProcessor();
        processor.processCreditCardPayment(100.00);
    }
}


// Now it works for two methods. But guess what happens when the client wants to add UPI, Bitcoin, or Apple Pay?

// Each time, you're cracking open the PaymentProcessor class.

// Each modification carries the risk of:

// Introducing Bugs: You might accidentally break the existing credit card or PayPal functionality while adding the new payment method.
// Increased Testing Overhead: Every time you change the class, you need to re-test all its functionalities, not just the new one.
// Reduced Readability: The class becomes a monstrous collection of if-else if statements or a switch case that's hard to navigate and understand.
// Scalability Issues: Adding new payment types becomes progressively more difficult and error-prone.
// This constant modification is a direct violation of the Open-Closed Principle.