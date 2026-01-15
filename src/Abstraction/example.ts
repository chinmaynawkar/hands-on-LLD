// Abstraction:
// - Hide complex implementation details
// - Show only essential features
// abstraction class implementation
// The 'abstract' keyword marks this class as a base class that cannot be instantiated directly;
// it is meant to be subclassed and may contain abstract methods that subclasses must implement.
abstract class Vehicle {
    protected brand:string;


/**
 * PURPOSE: A constructor is a special method that runs automatically when you create a new instance of a class.
 * USE IT WHEN: you need to set up the initial state of the object (assign values to properties, run setup logic, or accept required data at birth).
 * REMEMBER: it’s the one-time “birth ritual” that turns a blank blueprint into a ready-to-use object.
 */
constructor(brand: string) {
    this.brand = brand;
}
 // Abstract = WHAT must be done
  abstract start(): void;

  // Concrete = shared HOW
  displayBrand(): void {
    console.log(`Brand: ${this.brand}`);
  }
}

// Implementing the subclass
class Car extends Vehicle {
    constructor(brand:string) {
        super(brand); // calls the parent (Vehicle) constructor,
        //  passing the brand value up so the base class can initialize its protected field
    }
    // Implementing the abstract method
    start(): void {
        console.log("Car is starting");
    }
}