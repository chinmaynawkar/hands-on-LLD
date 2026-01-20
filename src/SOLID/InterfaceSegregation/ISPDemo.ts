import { CanWalk, CanTalk, CanTakePhoto, RobotDog, CameraToy } from "./ISP";

/**
 * Simple, story-style demo for Interface Segregation Principle (ISP).
 *
 * version:
 *  - Each toy gets its own tiny remote.
 *  - Dog toy: only "walk" + "talk" buttons.
 *  - Camera toy: only "takePhoto" button.
 *  - No toy is forced to understand buttons it never uses.
 */

export function runISPDemo(): void {
  console.log("\n========== Interface Segregation Principle (ISP) Demo ==========\n");

  const dog: CanWalk & CanTalk = new RobotDog();
  const camera: CanTakePhoto = new CameraToy();

  console.log("RobotDog remote: only 'walk' and 'talk' buttons are used:");
  makeItWalk(dog);
  makeItTalk(dog);

  console.log("\nCameraToy remote: only 'takePhoto' button is used:");
  makeItTakePhoto(camera);

  console.log(`
Summary (for an 8-year-old):
- We don't give tiny toys a huge, confusing remote.
- We only give them the buttons (methods) they actually need.
- This makes our code simple and easy to understand.
`);
}

function makeItWalk(toy: CanWalk): void {
  toy.walk();
}

function makeItTalk(toy: CanTalk): void {
  toy.talk();
}

function makeItTakePhoto(toy: CanTakePhoto): void {
  toy.takePhoto();
}

