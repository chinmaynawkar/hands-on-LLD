/**
 * ❌ Example WITHOUT Interface Segregation Principle (ISP)
 *
 * Bad story:
 *  - We build one HUGE interface: "SuperToy" with many buttons.
 *  - Even simple toys (like a basic robot dog) are forced to
 *    pretend they can do everything (walk, talk, take photos, etc.).
 *  - They end up with empty or fake methods.
 *
 * This makes the code:
 *  - confusing (why does a dog toy have takePhoto()?)
 *  - harder to understand and maintain
 */

// ❌ One big interface with too many abilities
interface SuperToy {
  walk(): void;
  talk(): void;
  takePhoto(): void;
}

// ❌ RobotDog is forced to implement ALL methods
class FatRobotDog implements SuperToy {
  walk(): void {
    console.log("FatRobotDog: walking...");
  }

  talk(): void {
    console.log("FatRobotDog: woof!");
  }

  // ❌ This toy can't really take photos, but we MUST add this method.
  // In real code, people often leave it empty or throw errors.
  takePhoto(): void {
    console.log("FatRobotDog: I don't have a camera, this is useless…");
  }
}

/**
 * Lesson:
 *  - Do NOT force classes to depend on methods they do not need.
 *  - Split big interfaces into smaller, focused ones (see ISP.ts).
 */

