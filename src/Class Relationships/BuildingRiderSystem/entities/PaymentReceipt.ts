import { PaymentStatus } from "../enums";

export class PaymentReceipt {
  constructor(
    public readonly rideId: string,
    public readonly amount: number,
    public readonly method: string,
    public readonly status: PaymentStatus,
    public readonly referenceId: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
