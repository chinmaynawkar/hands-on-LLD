import { Ride } from "../entities/RideStrict";
import { Location } from "../Location";
import { RideRepository } from "../repository/RideRepository";
import { RiderRepository } from "../repository/RiderRepository";
import { DriverRepository } from "../repository/DriverRepository";
import { MatchingService } from "./MatchingService";

export class RideService {
  constructor(
    private rideRepo: RideRepository,
    private riderRepo: RiderRepository,
    private driverRepo: DriverRepository,
    private matchingService: MatchingService
  ) {}

  requestRide(input: {
    rideId: string;
    riderId: string;
    pickup: Location;
    drop: Location;
  }): Ride {
    // Dependency: RideService uses RiderRepo temporarily to validate rider
    this.riderRepo.findById(input.riderId);

    const ride = new Ride(input.rideId, input.riderId, input.pickup, input.drop);

    // Dependency: uses MatchingService to find driver
    const driver = this.matchingService.findNearestDriverAvailable(input.pickup);

    // assign driver
    ride.assignDriver(driver.getId());

    this.rideRepo.save(ride);

    console.log(`[RideService] Ride requested. Matched driver=${driver.getId()}`);
    return ride;
  }

  startRide(rideId: string): void {
    const ride = this.rideRepo.findById(rideId);

    const driverId = ride.getDriverId();
    if (!driverId) throw new Error("Ride has no driver assigned");

    const driver = this.driverRepo.findById(driverId);

    driver.startTrip();
    ride.startRide();

    console.log(`[RideService] Ride started. rideId=${rideId}`);
  }

  completeRide(rideId: string): void {
    const ride = this.rideRepo.findById(rideId);

    const driverId = ride.getDriverId();
    if (!driverId) throw new Error("Ride has no driver assigned");

    const driver = this.driverRepo.findById(driverId);

    ride.completeRide();
    driver.endTrip();

    console.log(`[RideService] Ride completed. rideId=${rideId}`);
  }

  cancelRide(rideId: string): void {
    const ride = this.rideRepo.findById(rideId);
    ride.cancelRide();

    console.log(`[RideService] Ride cancelled. rideId=${rideId}`);
  }
}
