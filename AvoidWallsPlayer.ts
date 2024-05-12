import Player from "./Player";
import SnakeController from "./SnakeController";
import Snake from "./Snake";
import Point from "./Point";

/**
 * A class representing a player that avoids walls in a snake game.
 * It extends the Player class and uses the SnakeController to manage the snake's movement.
 */
class AvoidWallsPlayer extends Player {
  protected scs: SnakeController[];
  /**
   * Constructs an AvoidWallsPlayer instance.
   * @param {SnakeController} snakeController - An instance of SnakeController to control the snake.
   */

  constructor(snakeControllers: SnakeController[]) {
    super(snakeControllers); // Call the parent class constructor
    this.scs = snakeControllers; // Store the SnakeController instance for later use
  }

  /**
   * Determines and makes the next turn for the snake, avoiding walls.
   */

  makeTurn(): void {
    this.scs.forEach((sc) => {
      const snakeDirection = sc.snakeDirection;
      const position = sc.snakePosition;
      const worldHeight = sc.WorldModel.WorldHeight;
      const worldWidth = sc.WorldModel.WorldWidth;

      switch (snakeDirection) {
        case "left":
          this.handleMovingLeft(sc, position, worldHeight);
          break;
        case "right":
          this.handleMovingRight(sc, position, worldWidth, worldHeight);
          console.log("Right Handling");
          break;
        case "up":
          this.handleMovingUp(sc, position, worldWidth);
          break;
        case "down":
          this.handleMovingDown(sc, position, worldWidth, worldHeight);
          break;
        default:
          console.log("Unknown direction");
      }
    });
  }

  private handleMovingLeft(
    sc: SnakeController, // 'sc' is now a parameter of this method
    position: Point,
    worldHeight: number,
  ): void {
    if (position.x <= 0) {
      if (position.y <= worldHeight / 2) {
        sc.turnSnakeDown(); // Correctly using 'sc' here
      } else {
        sc.turnSnakeUp();
      }
    }
  }

  private handleMovingRight(
    sc: SnakeController,
    position: Point,
    worldWidth: number,
    worldHeight: number,
  ): void {
    if (position.x >= worldWidth - 1) {
      if (position.y <= worldHeight / 2) {
        sc.turnSnakeDown();
        console.log("turning down from right");
      } else {
        sc.turnSnakeUp();
        console.log("turning up from right");
      }
    }
  }

  private handleMovingUp(
    sc: SnakeController,
    position: Point,
    worldWidth: number,
  ): void {
    if (position.y <= 0) {
      if (position.x >= worldWidth / 2) {
        sc.turnSnakeLeft();
      } else {
        sc.turnSnakeRight();
      }
    }
  }

  private handleMovingDown(
    sc: SnakeController,
    position: Point,
    worldWidth: number,
    worldHeight: number,
  ): void {
    if (position.y >= worldHeight - 1) {
      if (position.x >= worldWidth / 2) {
        sc.turnSnakeLeft();
      } else {
        sc.turnSnakeRight();
      }
    }
  }
}

export default AvoidWallsPlayer;
