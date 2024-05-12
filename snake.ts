import ICollidable from "./ICollidable";
import Point from "./Point";
import IActor from "./IActor";
import Food from "./Food";
export default class Snake implements ICollidable {
  /**
   * Represents a snake with Poistion, Direction, and color
   */

  public currentParts__: Point[];
  private currentPosition__: Point;
  private currentDirection__: string;
  public color__: string;
  private startingPosition__ = new Point(0, 0);
  private size__: number;
  private isCurrentlyActive__: boolean;
  /**
   * Constructs a snake with a specified color
   * @param color - the color of the snake
   */
  constructor(
    color: string,
    startingPosition: Point = new Point(0, 0),
    direction: string = "right",
    size: number,
    isCurrentlyActive = true,
  ) {
    this.isCurrentlyActive__ = isCurrentlyActive;
    this.color__ = color;
    this.startingPosition__ = startingPosition;
    this.currentPosition__ = new Point(startingPosition.x, startingPosition.y);
    this.currentParts__ = [];
    this.currentDirection__ = direction;
    this.size__ = size;
    for (let i = 0; i < size; i++) {
      let part;
      switch (direction) {
        case "right":
          // If moving right, add tail to the left of the head
          part = new Point(startingPosition.x - i, startingPosition.y);
          break;
        case "left":
          // If moving left, add tail to the right of the head
          part = new Point(startingPosition.x + i, startingPosition.y);
          break;
        case "up":
          // If moving up, add tail below the head
          part = new Point(startingPosition.x, startingPosition.y + i);
          break;
        case "down":
          // If moving down, add tail above the head
          part = new Point(startingPosition.x, startingPosition.y - i);
          break;
        default:
          // Default to adding the tail to the left if the direction is unspecified
          part = new Point(startingPosition.x - i, startingPosition.y);
          break;
      }
      this.currentParts__.push(part);
    }
  }
  public grow() {
    // Assume 'direction' is accessible within this method, and 'currentParts__' is the snake's body parts array
    const tail = this.currentParts__[this.currentParts__.length - 1]; // Get the tail's position
    let newPoint;

    switch (this.direction) {
      case "right":
        // Add new part to the right of the tail
        newPoint = new Point(tail.x + 1, tail.y);
        break;
      case "left":
        // Add new part to the left of the tail
        newPoint = new Point(tail.x - 1, tail.y);
        break;
      case "up":
        // Add new part above the tail
        newPoint = new Point(tail.x, tail.y - 1);
        break;
      case "down":
        // Add new part below the tail
        newPoint = new Point(tail.x, tail.y + 1);
        break;
      default:
        // If direction is unspecified, you might choose a default behavior
        newPoint = new Point(tail.x - 1, tail.y);
        break;
    }

    this.currentParts__.push(newPoint); // Add the new part to the snake's body
  }
  /**
   * Moves the snake in its current direction by the specified number of squares.
   * @param squares - The number of squares to move.
   */
  public get direction(): string {
    return this.currentDirection__;

    /**
     * @returns - the current direction of the snake
     */
  }
  /**
   * @returns The current direction of the snake.
   */
  public get head(): Point {
    return this.currentParts__[0];
    /**
     * @returns the current poistion on x,y coordinate of snake
     */
  }

  public get position(): Point {
    return this.currentPosition__;
  }

  public setPosition(newPosition: Point) {
    this.currentPosition__ = newPosition;
  }

  public setDirection(newDirection: string) {
    this.currentDirection__ = newDirection;
  }

  public get parts(): Point[] {
    return this.currentParts__;
  }
  public get type(): string {
    return "Snake";
  }
  public get size(): number {
    return this.currentParts__.length;
  }
  public update() {
    this.move(1);
  }
  public die() {
    this.isCurrentlyActive__ = false;
  }

  public set direction(newDirection: string) {
    this.currentDirection__ = newDirection;
  }

  public didCollideWithObject(other: ICollidable): boolean {
    if (!(other instanceof Snake)) {
      // Assuming that all ICollidable objects have a 'position' property
      // This will throw an error if 'position' does not exist on 'other'
      return this.position.equals(other.position);
    } else {
      // Since 'other' is confirmed as Snake, we can safely cast it
      const otherSnake = other as Snake;
      if (this === otherSnake) {
        // Checking for self-collision: head collides with any of its own body parts
        return this.currentParts__
          .slice(1)
          .some((part) => part.equals(this.head));
      } else {
        // Checking for collision with another snake
        return otherSnake.currentParts__.some((part) => part.equals(this.head));
      }
    }
  }
  //moves the snake in the current direction
  public move(squares: number) {
    for (let i = this.currentParts__.length - 1; i > 0; i--) {
      this.currentParts__[i] = this.currentParts__[i - 1];
    }
    let head = this.currentParts__[0];
    let newX = head.x;
    let newY = head.y;
    if (this.direction === "right") {
      newX += squares;
    } else if (this.direction === "left") {
      newX -= squares;
    } else if (this.direction === "up") {
      newY -= squares;
    } else if (this.direction === "down") {
      newY += squares;
    }
    this.currentPosition__ = new Point(newX, newY);
    this.currentParts__[0] = this.currentPosition__;
  }

  //turns the snake to the right
  public turnRight() {
    if (this.currentDirection__ === "right") {
      this.currentDirection__ = "down";
    } else if (this.currentDirection__ === "down") {
      this.currentDirection__ = "left";
    } else if (this.currentDirection__ === "left") {
      this.currentDirection__ = "up";
    } else this.currentDirection__ = "right";
  }
  //turns the snake to the left
  public turnLeft() {
    if (this.currentDirection__ === "right") {
      this.currentDirection__ = "up";
    } else if (this.currentDirection__ === "up") {
      this.currentDirection__ = "left";
    } else if (this.currentDirection__ === "left") {
      this.currentDirection__ = "down";
    } else this.currentDirection__ = "right";
  }
  public turnDown() {
    this.currentDirection__ = "down";
  }
  public turnUp() {
    this.currentDirection__ = "up";
  }
}
