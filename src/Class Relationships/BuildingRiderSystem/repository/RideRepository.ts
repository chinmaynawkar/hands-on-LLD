import { Ride } from "../entities/RideStrict";

export class RideRepository {
  private rides = new Map<string, Ride>();

  save(ride: Ride): void {
    this.rides.set(ride.getId(), ride);
  }

  findById(id: string): Ride {
    const ride = this.rides.get(id);
    if (!ride) throw new Error(`Ride not found: ${id}`);
    return ride;
  }
}
