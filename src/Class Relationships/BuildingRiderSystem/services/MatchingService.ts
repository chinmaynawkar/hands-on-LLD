import { Driver } from "../entities/Driver";
import { DriverRepository } from "../repository/DriverRepository";
import { Location } from "../Location";
import { DistanceCalculator } from "./DistanceCalculator";

export class MatchingService {
    constructor(private readonly driverRepository: DriverRepository) {}

    findNearestDriverAvailable(pickupLocation: Location): Driver {
        const drivers = this.driverRepository.findAll();
        const availableDrivers = drivers.filter(driver => driver.isAvailable());
        if(availableDrivers.length === 0) {
            throw new Error("No available drivers found");
        }

        availableDrivers.sort((a, b) => {
      const da = DistanceCalculator.distanceInKm(pickupLocation, a.getLocation());
      const db = DistanceCalculator.distanceInKm(pickupLocation, b.getLocation());
      return da - db;
    });

    return availableDrivers[0];
  }
}