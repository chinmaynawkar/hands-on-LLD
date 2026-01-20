/**
 * Liskov Substitution Principle (LSP) - Friendly version
 *
 * Idea :
 *  - If a game says "I need a bird",
 *  - you can give it ANY bird (sparrow, penguin, etc.),
 *  - and the game should still work and not be surprised.
 *
 * In code:
 *  - Wherever we expect a Bird,
 *  - we can safely use any class that behaves like a Bird.
 */

// A simple Bird can make a sound (no promise about flying)
export interface Bird {
  name: string;
  makeSound(): void;
}

// Some birds can also fly
export interface FlyingBird extends Bird {
  fly(): void;
}

// ✅ Sparrow is a normal flying bird
export class Sparrow implements FlyingBird {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name}: chirp chirp`);
  }

  fly(): void {
    console.log(`${this.name}: I am flying in the sky! 🕊️`);
  }
}

// ✅ Penguin is a bird but cannot fly
// We do NOT lie about its abilities.
// We do NOT put Penguin where a FlyingBird is required.
export class Penguin implements Bird {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name}: flap flap (but I don't fly)`);
  }
}

