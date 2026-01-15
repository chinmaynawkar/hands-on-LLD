import { PaymentMethod } from "../../interfaces/PaymentMethod";
import { PaymentReceipt } from "../../entities/PaymentReceipt";
import { PaymentStatus } from "../../enums";

export class CardPayment implements PaymentMethod {
  pay(input: { rideId: string; amount: number }): PaymentReceipt {
    // In real world: call card processor Stripe/Razorpay etc.
    const success = true;

    return new PaymentReceipt(
      input.rideId,
      input.amount,
      "CARD",
      success ? PaymentStatus.SUCCESS : PaymentStatus.FAILED,
      `card_${Date.now()}`
    );
  }
}
