import { Location } from "../Location";

// Simple distance approx for MVP (not real geo accurate).
// In real systems we'd use Haversine formula or Maps API.
export class DistanceCalculator {
  static distanceInKm(a: Location, b: Location): number {
    const dx = a.latitude - b.latitude;
    const dy = a.longitude - b.longitude;
    return Math.sqrt(dx * dx + dy * dy) * 111; // approx km scaling
  }
}
