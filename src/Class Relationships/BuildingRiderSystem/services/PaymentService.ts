import { RideRepository } from "../repository/RideRepository";
import { PricingService } from "./PricingService";
import { PaymentMethod } from "../interfaces/PaymentMethod";
import { RideStatus } from "../enums";
import { PaymentReceipt } from "../entities/PaymentReceipt";

export class PaymentService {
  constructor(
    private rideRepo: RideRepository,
    private pricingService: PricingService
  ) {}

  payForRide(input: {
    rideId: string;
    durationMin: number;
    method: PaymentMethod;
  }): PaymentReceipt {
    const ride = this.rideRepo.findById(input.rideId);

    // Payment should happen only after completion
    if (ride.getStatus() !== RideStatus.COMPLETE) {
      throw new Error("Payment allowed only after ride is COMPLETE");
    }

    const amount = this.pricingService.estimateFare(ride, input.durationMin);

    // 🔥 Polymorphism: method can be UPI/CARD/CASH without changing this service
    const receipt = input.method.pay({ rideId: ride.getId(), amount });

    console.log(
      `[PaymentService] payment method=${receipt.method}, status=${receipt.status}, ref=${receipt.referenceId}`
    );

    return receipt;
  }
}
