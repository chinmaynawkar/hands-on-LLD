# 🎯 Low Level Design Learning Repository

> A comprehensive learning repository for mastering Object-Oriented Programming (OOP) concepts, Class Relationships, and Design Principles through hands-on TypeScript implementations.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Completed Modules](#completed-modules)
  - [OOP Fundamentals](#1-oop-fundamentals)
  - [Class Relationships](#2-class-relationships)
- [Project Structure](#project-structure)
- [Next Steps](#next-steps)
- [Contributing](#contributing)

---

## 🎓 Overview

This repository serves as a structured learning path for Low Level Design (LLD) concepts. Each module contains practical implementations, real-world examples, and comprehensive documentation to help you understand and apply OOP principles effectively.

### Learning Path

```
OOP Fundamentals → Class Relationships → Design Principles → Design Patterns
     ✅                ✅                    🔄              📅
```

---

## 🛠️ Prerequisites

- **Node.js** (v16 or higher)
- **TypeScript** (v5.x)
- Basic understanding of JavaScript/TypeScript
- Familiarity with Object-Oriented Programming concepts

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd "Low Level Design"

# Install dependencies
npm install

# Run the project
npm run dev
```

### Available Scripts

```bash
npm run dev    # Start development server with hot reload
npm run build  # Compile TypeScript to JavaScript
npm start      # Run the compiled JavaScript
```

---

## ✅ Completed Modules

### 1. OOP Fundamentals

#### 📦 Encapsulation

**Location:** `src/encapsulation/`

Learn how to properly encapsulate data and behavior within classes.

- **Bad Example:** `BadBankAccount.ts` - Demonstrates problems with public fields
- **Good Example:** `GoodBankAccount.ts` - Shows proper encapsulation with private fields and controlled access

**Key Concepts:**
- Private fields and methods
- Public getters/setters
- Data validation
- Business rule enforcement

**Example:**
```typescript
// ❌ Bad: Public field allows invalid states
class BadBankAccount {
    balance: number = 0; // Anyone can set this to -1000!
}

// ✅ Good: Encapsulated with validation
class GoodBankAccount {
    private balance: number = 0;
    
    public deposit(amount: number): void {
        if (amount <= 0) throw new Error("Amount must be positive");
        this.balance += amount;
    }
}
```

#### 🎭 Abstraction

**Location:** `src/Abstraction/`

Understand how to hide implementation details and expose only what's necessary.

- **Notification System:** `NotificationSystem.ts` - Interface defining notification contract
- **Implementations:** `EmailNotifier.ts`, `SMSNotifier.ts` - Concrete implementations
- **Logger:** `Logger.ts` - Abstraction example for logging

**Key Concepts:**
- Interface-based design
- Implementation hiding
- Contract definition
- Polymorphism through interfaces

**Example:**
```typescript
// Abstraction: What can be done, not how
interface Notifier {
    send(message: string): void;
}

// Implementation: How it's done
class EmailNotifier implements Notifier {
    send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}
```

---

### 2. Class Relationships

This module covers the five fundamental relationships in OOP, demonstrated through practical examples.

#### 🔗 Association

**Location:** `src/Class Relationships/BuildingRiderSystem/entities/RideStrict.ts`

**Definition:** A relationship where two classes are connected but can exist independently.

**Real-world Example:** In the Ride Booking System, a `Ride` is associated with a `Driver` and `Rider`. They know about each other, but can exist independently.

```typescript
// Ride knows about Driver (association)
class Ride {
    private driverId?: string; // Associated, not owned
    
    public assignDriver(driverId: string): void {
        this.driverId = driverId;
    }
}
```

**Key Points:**
- Objects can exist independently
- Relationship is temporary or optional
- No ownership implied

---

#### 📦 Aggregation

**Location:** `src/Class Relationships/Aggregation.ts`

**Definition:** A "has-a" relationship where the whole contains parts, but parts can exist without the whole.

**Examples:**
- `Order` aggregates `Item[]` - Items can exist without an Order
- `Team` aggregates `Developer[]` - Developers can exist without a Team

```typescript
// Order aggregates Items (items can exist independently)
class Order {
    private items: Item[] = [];
    
    public addItem(item: Item): void {
        this.items.push(item); // Item exists independently
    }
}

// Team aggregates Developers
class Team {
    private developers: Developer[] = [];
    
    public addDeveloper(developer: Developer): void {
        this.developers.push(developer);
    }
}
```

**Key Points:**
- "Has-a" relationship
- Parts can exist independently
- Whole doesn't create parts
- Parts can be shared

---

#### 🏗️ Composition

**Location:** `src/Class Relationships/Composition.ts`

**Definition:** A strong "owns-a" relationship where parts cannot exist without the whole.

**Example:** `House` composes `Room[]` - Rooms are created by and owned by the House.

```typescript
// House composes Rooms (rooms cannot exist without house)
class House {
    private rooms: Room[] = [];
    
    constructor() {
        // Composition: House CREATES its rooms
        this.rooms = [
            new Room("Living Room"),
            new Room("Kitchen"),
            new Room("Bedroom")
        ];
    }
}
```

**Key Points:**
- "Owns-a" relationship
- Parts are created by the whole
- Parts cannot exist independently
- Lifecycle is tied together

---

#### 🔄 Dependency

**Location:** `src/Class Relationships/BuildingRiderSystem/services/`

**Definition:** A relationship where one class uses another temporarily, often through method parameters.

**Example:** `RideService` depends on `MatchingService` to find drivers.

```typescript
// RideService depends on MatchingService
class RideService {
    constructor(
        private matchingService: MatchingService // Dependency injection
    ) {}
    
    requestRide(input: RideInput): Ride {
        // Uses MatchingService temporarily
        const driver = this.matchingService.findNearestDriver(input.pickup);
        // ...
    }
}
```

**Key Points:**
- Temporary usage relationship
- Often through method parameters or constructor injection
- No permanent ownership
- Loose coupling

---

#### ⚡ Realization

**Location:** `src/Class Relationships/Realization.ts`

**Definition:** A relationship where a class implements an interface, defining a contract.

**Example:** Multiple payment methods realize the `Payment` interface.

```typescript
// Interface defines the contract
interface Payment {
    pay(amount: number): void;
}

// Classes realize the interface
class CreditCardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paying ${amount} with credit card`);
    }
}

class PayPalPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paying ${amount} with PayPal`);
    }
}
```

**Key Points:**
- "Implements" relationship
- Contract definition through interfaces
- Multiple classes can realize the same interface
- Enables polymorphism

---

### 🚗 Comprehensive Example: Ride Booking System

**Location:** `src/Class Relationships/BuildingRiderSystem/`

A complete, production-like implementation demonstrating all class relationships in a real-world scenario.

#### Project Structure

```
BuildingRiderSystem/
├── entities/              # Domain entities
│   ├── Driver.ts         # Driver entity
│   ├── Rider.ts          # Rider entity
│   ├── RideStrict.ts     # Ride entity (shows Association)
│   ├── RiderEvent.ts     # Event entity (shows Composition)
│   └── PaymentReceipt.ts # Payment receipt
├── services/             # Business logic services
│   ├── RideService.ts    # Main ride orchestration
│   ├── MatchingService.ts # Driver matching logic
│   ├── PricingService.ts # Fare calculation
│   ├── PaymentService.ts # Payment processing
│   └── payments/         # Payment implementations (Realization)
│       ├── CashPayment.ts
│       ├── UPIPayment.ts
│       └── CardPayment.ts
├── repository/           # Data access layer
│   ├── DriverRepository.ts
│   ├── RiderRepository.ts
│   └── RideRepository.ts
├── interfaces/           # Contracts
│   └── PaymentMethod.ts  # Payment interface (Realization)
├── UML/                  # Design documentation
│   ├── 01-UseCaseDiagram.md
│   ├── 02-ClassDiagram.md
│   └── 03-StateDiagram.md
└── ProjectContext.md     # Project requirements and design decisions
```

#### Relationships Demonstrated

| Relationship | Example | File |
|-------------|---------|------|
| **Association** | `Ride` ↔ `Driver` | `entities/RideStrict.ts` |
| **Aggregation** | `MatchingService` has `Driver[]` | `services/MatchingService.ts` |
| **Composition** | `Ride` owns `RideEvent[]` | `entities/RideStrict.ts` |
| **Dependency** | `RideService` uses `MatchingService` | `services/RideService.ts` |
| **Realization** | `UPIPayment` implements `PaymentMethod` | `services/payments/` |

#### Features

- ✅ Complete ride lifecycle (REQUESTED → ACCEPTED → IN_PROGRESS → COMPLETED)
- ✅ Driver matching algorithm
- ✅ Fare calculation
- ✅ Multiple payment methods (polymorphism)
- ✅ State management with validation
- ✅ Repository pattern
- ✅ Service layer architecture
- ✅ UML diagrams

#### Running the Example

```typescript
// See src/index.ts for complete example
const ride = rideService.requestRide({
    rideId: "ride-101",
    riderId: rider.getId(),
    pickup: new Location(19.08, 72.88),
    drop: new Location(19.1, 72.9),
});

rideService.startRide(ride.getId());
rideService.completeRide(ride.getId());

const receipt = paymentService.payForRide({
    rideId: ride.getId(),
    durationMin: 18,
    method: new UPIPayment(), // 🔥 Polymorphism in action
});
```

---

## 📁 Project Structure

```
Low Level Design/
├── src/
│   ├── Abstraction/              # Abstraction examples
│   │   ├── NotificationSystem.ts
│   │   ├── EmailNotifier.ts
│   │   ├── SMSNotifier.ts
│   │   └── Logger.ts
│   │
│   ├── Class Relationships/      # Class relationship examples
│   │   ├── Aggregation.ts        # Aggregation examples
│   │   ├── Composition.ts       # Composition examples
│   │   ├── Realization.ts       # Realization examples
│   │   └── BuildingRiderSystem/ # Comprehensive example
│   │       ├── entities/
│   │       ├── services/
│   │       ├── repository/
│   │       ├── interfaces/
│   │       └── UML/
│   │
│   ├── encapsulation/            # Encapsulation examples
│   │   └── BadBankAccount.ts
│   │
│   └── index.ts                  # Main entry point
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔜 Next Steps

### Design Principles (In Progress)

The next phase will cover SOLID principles and other fundamental design principles:

- [ ] **S**ingle Responsibility Principle (SRP)
- [ ] **O**pen/Closed Principle (OCP)
- [ ] **L**iskov Substitution Principle (LSP)
- [ ] **I**nterface Segregation Principle (ISP)
- [ ] **D**ependency Inversion Principle (DIP)
- [ ] DRY (Don't Repeat Yourself)
- [ ] KISS (Keep It Simple, Stupid)
- [ ] YAGNI (You Aren't Gonna Need It)

### Design Patterns (Future)

- Creational Patterns (Factory, Builder, Singleton)
- Structural Patterns (Adapter, Decorator, Facade)
- Behavioral Patterns (Observer, Strategy, Command)

---

## 🎯 Learning Objectives

By completing this repository, you will:

✅ Understand core OOP concepts (Encapsulation, Abstraction)  
✅ Master all five class relationships (Association, Aggregation, Composition, Dependency, Realization)  
✅ Apply design principles in real-world scenarios  
✅ Build maintainable, scalable, and testable code  
✅ Understand when to use each relationship type  
✅ Design systems with proper separation of concerns  

---

## 📝 Notes

- All examples are written in TypeScript for type safety and better OOP support
- Code follows production-grade practices with proper error handling
- Each module includes comments explaining the concepts
- The Ride Booking System serves as a comprehensive example combining all concepts

---

## 🤝 Contributing

This is a personal learning repository. If you find any issues or have suggestions:

1. Create an issue describing the problem or suggestion
2. Fork the repository (if applicable)
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is for educational purposes.

---

## 🙏 Acknowledgments

- Inspired by real-world system design challenges
- Based on industry best practices and design patterns
- Built to understand Low Level Design concepts deeply

---

**Happy Learning! 🚀**
