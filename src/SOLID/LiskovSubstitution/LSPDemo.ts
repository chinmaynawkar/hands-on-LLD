import { Bird, FlyingBird, Sparrow, Penguin } from "./LSP";

/**
 * Simple, story-style demo for Liskov Substitution Principle.
 *
 * Imagine:
 *  - We have a game that works with "birds".
 *  - The game sometimes only needs the bird to make a sound.
 *  - Sometimes it needs a bird that can really fly.
 *
 * LSP Rule:
 *  "If the game says it needs a Bird,
 *   any real Bird you give it should not break the game."
 */

export function runLSPDemo(): void {
  console.log("\n========== Liskov Substitution Principle (LSP) Demo ==========\n");

  // We create two birds:
  const flyingBird: FlyingBird = new Sparrow("Sam the Sparrow");
  const petPenguin: Bird = new Penguin("Pingu the Penguin");

  console.log("The game asks both birds to say something:");
  makeBirdTalk(flyingBird);
  makeBirdTalk(petPenguin); // ✅ Works: both are Birds

  console.log("\nNow the game asks a bird that can REALLY fly:");
  letBirdFly(flyingBird); // ✅ Works: Sparrow can fly

  // ❌ We do NOT pass Penguin to letBirdFly,
  // because a Penguin cannot fly.
  // This keeps our promise and follows LSP.

  console.log(`
Summary:
- We don't lie to the game.
- If we say a bird can fly, it must really fly.
- Penguin is still a bird, but we only use it where flying is NOT required.
`);
}

function makeBirdTalk(bird: Bird): void {
  bird.makeSound();
}

function letBirdFly(bird: FlyingBird): void {
  bird.fly();
}

