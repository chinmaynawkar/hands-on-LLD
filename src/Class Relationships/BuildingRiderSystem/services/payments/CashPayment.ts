import { PaymentMethod } from "../../interfaces/PaymentMethod";
import { PaymentReceipt } from "../../entities/PaymentReceipt";
import { PaymentStatus } from "../../enums";

export class CashPayment implements PaymentMethod {
  pay(input: { rideId: string; amount: number }): PaymentReceipt {
    // Cash is always "success" in our MVP
    return new PaymentReceipt(
      input.rideId,
      input.amount,
      "CASH",
      PaymentStatus.SUCCESS,
      `cash_${Date.now()}`
    );
  }
}
