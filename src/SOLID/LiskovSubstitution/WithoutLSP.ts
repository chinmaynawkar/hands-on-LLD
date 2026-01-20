/**
 * ❌ Example WITHOUT Liskov Substitution Principle
 *
 * Kid story:
 *  - We say: "Every bird in this game can fly".
 *  - Then we add a penguin (penguins can't fly),
 *  - but we STILL treat it like a flying bird.
 *  - Now the game gets confused when the penguin tries to fly.
 */

class Bird {
  constructor(public name: string) {}

  fly(): void {
    console.log(`${this.name}: I am flying!`);
  }
}

// ❌ Problem: Penguin extends Bird but cannot really fly.
// We are LYING to the code by saying "Penguin is a Bird that can fly".
class Penguin extends Bird {
  fly(): void {
    // In a real bug, this might throw an error or do nothing.
    console.log(`${this.name}: I actually cannot fly... this is confusing!`);
  }
}

function makeBirdFly(bird: Bird): void {
  console.log("Game: Hey bird, please fly now!");
  bird.fly();
}

// Demo of the problem
const normalBird = new Bird("Sparrow");
const badPenguin = new Penguin("Pingu");

makeBirdFly(normalBird); // ✅ Works fine
makeBirdFly(badPenguin); // ⚠️ Breaks the promise: we expected a flying bird

/**
 * Lesson:
 *  - Do not create child classes that break the promises of the parent.
 *  - If the parent says "all my children can fly", every child MUST really fly.
 */

