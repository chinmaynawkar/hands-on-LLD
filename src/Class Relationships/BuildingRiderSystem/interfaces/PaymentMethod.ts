import { PaymentReceipt } from "../entities/PaymentReceipt";

export interface PaymentMethod {
  pay(input: { rideId: string; amount: number }): PaymentReceipt;
}
