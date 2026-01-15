import { Rider } from "../entities/Rider";

export class RiderRepository {
    private riders= new Map<string, Rider>();

    save(rider: Rider): void {
    this.riders.set(rider.getId(), rider);
  }

  findById(id: string): Rider {
    const rider = this.riders.get(id);
    if (!rider) throw new Error(`Rider not found: ${id}`);
    return rider;
  }
}