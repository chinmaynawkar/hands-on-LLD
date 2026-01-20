import { Rider } from "./Class Relationships/BuildingRiderSystem/entities/Rider";
import { Driver } from "./Class Relationships/BuildingRiderSystem/entities/Driver";
import { Location } from "./Class Relationships/BuildingRiderSystem/Location";

import { RiderRepository } from "./Class Relationships/BuildingRiderSystem/repository/RiderRepository";
import { DriverRepository } from "./Class Relationships/BuildingRiderSystem/repository/DriverRepository";
import { RideRepository } from "./Class Relationships/BuildingRiderSystem/repository/RideRepository";

import { MatchingService } from "./Class Relationships/BuildingRiderSystem/services/MatchingService";
import { RideService } from "./Class Relationships/BuildingRiderSystem/services/RideService";
import { PricingService } from "./Class Relationships/BuildingRiderSystem/services/PricingService";
import { PaymentService } from "./Class Relationships/BuildingRiderSystem/services/PaymentService";

import { UPIPayment } from "./Class Relationships/BuildingRiderSystem/services/payments/UPIPayment"; // swap to CashPayment/CardPayment

// --- Setup repositories
const riderRepo = new RiderRepository();
const driverRepo = new DriverRepository();
const rideRepo = new RideRepository();

// --- Seed data
const rider = new Rider("r1", "Chinmay");
riderRepo.save(rider);

const d1 = new Driver("d1", "Amit", new Location(19.076, 72.8777));
const d2 = new Driver("d2", "Rahul", new Location(19.2, 72.8));

d1.goOnline();
d2.goOnline();

driverRepo.save(d1);
driverRepo.save(d2);

// --- Setup services
const matchingService = new MatchingService(driverRepo);
const rideService = new RideService(rideRepo, riderRepo, driverRepo, matchingService);

const pricingService = new PricingService();
const paymentService = new PaymentService(rideRepo, pricingService);

// --- Request Ride
const ride = rideService.requestRide({
  rideId: "ride-101",
  riderId: rider.getId(),
  pickup: new Location(19.08, 72.88),
  drop: new Location(19.1, 72.9),
});

console.log("Ride status:", ride.getStatus());
console.log("Driver assigned:", ride.getDriverId());

// --- Start + Complete
rideService.startRide(ride.getId());
rideService.completeRide(ride.getId());

// --- Pay
const receipt = paymentService.payForRide({
  rideId: ride.getId(),
  durationMin: 18,
  method: new UPIPayment(), // 🔥 polymorphism here
});

console.log("Receipt:", receipt);


// ========== Single Responsibility Principle (SRP) Demo ==========
import { runSRPDemo } from "./SOLID/SingleResPrinciple/SRPDemo";

runSRPDemo();
