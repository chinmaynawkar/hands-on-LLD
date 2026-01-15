import { PaymentMethod } from "../../interfaces/PaymentMethod";
import { PaymentReceipt } from "../../entities/PaymentReceipt";
import { PaymentStatus } from "../../enums";

export class UPIPayment implements PaymentMethod {
  pay(input: { rideId: string; amount: number }): PaymentReceipt {
    // In real world: call payment gateway API here
    const success = true;

    return new PaymentReceipt(
      input.rideId,
      input.amount,
      "UPI",
      success ? PaymentStatus.SUCCESS : PaymentStatus.FAILED,
      `upi_${Date.now()}`
    );
  }
}
