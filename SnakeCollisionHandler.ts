import ICollidable from "./ICollidable";
import ICollisionHandler from "./ICollisionHandler";
import Snake from "./Snake";
export default class SnakeCollisionHandler implements ICollisionHandler {
  applyAction(snake1: ICollidable, snake2: ICollidable): void {
    if (snake1 instanceof Snake && snake2 instanceof Snake) {
      snake1.die();
    } else {
      console.error("Both objects must be instances of Snake");
    }
  }
}
