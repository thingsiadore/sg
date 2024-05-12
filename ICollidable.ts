// Assuming the existence of "./IActor", "./Snake", "./Food"
import Point from "./Point";
import IActor from "./IActor";

// Correctly defined ICollidable interface extending IActor
export default interface ICollidable extends IActor {
  position: Point;
  didCollideWithObject(other: ICollidable): boolean; // Method to determine collision with another collidable
  readonly type: string;
}
