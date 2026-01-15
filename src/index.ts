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














// const account = new BadBankAccount();
// const account2 = new GoodBankAccount();

// const logger = new Logger();
// logger.log("Application started");
// logger.log("User logged in");



// account2.deposit(200);
// console.log(account2.getBalance());

// account2.withdraw(100);
// console.log(account2.getBalance()); // 100

// console.log(account2.hasSufficientBalance(100)); // true
// console.log(account2.hasSufficientBalance(200)); // false

// //  ----- Abstraction implementation example ------
// let notifier: Notifier = new EmailNotifier();
// notifier.send("Your order has been placed!"); // Sending email: Your order has been placed!

// notifier = new SMSNotifier();
// notifier.send("Your OTP is 123456"); // 📱 Sending SMS notification: Your OTP is 123456
/*
No if/else
No instanceof
No branching logic

This is real abstraction.
*/

// Aggregation example demo


// // Aggregation with Order, Item, and Customer
// const customer = new Customer("Alice");
// const order = new Order(customer);

// const item1 = new Item("Laptop", 1500);
// const item2 = new Item("Mouse", 25);

// order.addItem(item1);
// order.addItem(item2);

// console.log(`Customer: ${order.getCustomer().getName()}`);
// console.log("Items in order:");
// order.getItems().forEach(item => {
//     console.log(`- ${item.getName()}: $${item.getPrice()}`);
// });
// console.log(`Total: $${order.getTotal()}`);

// // Aggregation with Team and Developer
// const dev1 = new Developer("Bob", ["TypeScript", "React"]);
// const dev2 = new Developer("Charlie", ["Node.js", "Express"]);

// const team = new Team([dev1]);
// team.addDeveloper(dev2);

// console.log("\nDevelopers in team:");
// team.getDevelopers().forEach(dev => {
//     console.log(`- ${dev.getName()} (skills: ${dev.getSkills().join(", ")})`);
// });


// const house = new House();
// house.describe();
