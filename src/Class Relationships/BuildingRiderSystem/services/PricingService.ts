import { Ride } from "../entities/RideStrict";
import { FareConfig } from "./FareConfig";
import { DistanceCalculator } from "./DistanceCalculator";

export class PricingService {
  estimateFare(ride: Ride, durationMin: number): number {
    const distanceKm = DistanceCalculator.distanceInKm(ride.getPickup(), ride.getDrop());

    const fare =
      FareConfig.baseFare +
      FareConfig.perKmRate * distanceKm +
      FareConfig.perMinRate * durationMin;

    // Rounded like real systems
    return Math.ceil(fare);
  }
}
