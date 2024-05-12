import ICollidable from "./ICollidable";

export default interface ICollisionHandler {
  applyAction(object1: ICollidable, object2: ICollidable): void;
}
