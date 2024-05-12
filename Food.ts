import IActor from "./IActor";
import ICollidable from "./ICollidable";
import Point from "./Point";

export default class Food implements IActor {
  private currentPosition__: Point;
  private isCurrentlyActive__: Boolean;
  constructor(x: number, y: number) {
    this.currentPosition__ = new Point(x, y);
    this.isCurrentlyActive__ = true;
  }
  public update(): void {}

  public eat() {
    this.isCurrentlyActive__ = false;
  }
  public get position() {
    return this.currentPosition__;
  }
  public get isActive() {
    return this.isCurrentlyActive__;
  }
  public get type() {
    return "Food";
  }
  public move(): void {
    // Intentionally left blank because Food does not move
  }
}
