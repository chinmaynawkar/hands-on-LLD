/**
 * Interface Segregation Principle (ISP)
 *
 * Story:
 *  - Imagine a giant remote with 20 buttons.
 *  - A small toy car only needs 2 buttons: "go" and "stop".
 *  - If we FORCE the toy car to understand all 20 buttons,
 *    it gets confused and our code becomes messy.
 *
 * ISP says:
 *  "Give each toy a SMALL remote with ONLY the buttons it really needs."
 */

// Each small interface is a tiny, focused "remote control"
export interface CanWalk {
  walk(): void;
}

export interface CanTalk {
  talk(): void;
}

export interface CanTakePhoto {
  takePhoto(): void;
}

// ✅ RobotDog only needs to walk and talk
export class RobotDog implements CanWalk, CanTalk {
  walk(): void {
    console.log("RobotDog: walking happily 🐕");
  }

  talk(): void {
    console.log("RobotDog: woof-woof in robot language 🤖");
  }
}

// ✅ CameraToy only needs to take photos
export class CameraToy implements CanTakePhoto {
  takePhoto(): void {
    console.log("CameraToy: *click* took a picture 📸");
  }
}

