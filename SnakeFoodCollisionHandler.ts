import Food from "./Food";
import ICollidable from "./ICollidable";
import ICollisionHandler from "./ICollisionHandler";
import Snake from "./Snake";
export default class SnakeFoodCollsionHandler implements ICollisionHandler {
  applyAction(object1: ICollidable, object2: ICollidable): void {
    let snake: Snake;
    let food: Food;

    if (object1 instanceof Snake && object2 instanceof Food) {
      snake = object1;
      food = object2;
    } else if (object1 instanceof Food && object2 instanceof Snake) {
      snake = object2;
      food = object1;
    } else {
      throw new Error("Invalid types for SnakeFoodCollisionHandler");
    }
    food.eat();
    snake.grow();
  }
}
