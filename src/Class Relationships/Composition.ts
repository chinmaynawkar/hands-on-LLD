// Composition means the Whole own the parts but the parts cannot exist without the whole.

// Meaning:

// The Whole creates the parts

// The Whole manages them

// The parts cannot exist without the Whole

// Parts are not shared


// If the Whole is destroyed, do the Parts also die?

// If YES → Composition ✅


/// example house has rooms

export class Room {
  constructor(private name: string) {}

  describe(): void {
    console.log(`This is the ${this.name}`);
  }
}

export class House {
    private rooms: Room[] = [];

    constructor() {
        //// Composition: House CREATES its rooms internally
        this.rooms=[
            new Room("Living Room"),
            new Room("Kitchen"),
            new Room("Bedroom"),
            new Room("Bathroom")
        ]
    }

    describe(): void {
        console.log("This house has the following rooms:");
        this.rooms.forEach(room => room.describe());
    }
    }