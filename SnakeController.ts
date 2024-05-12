import WorldModel from "./WorldModel";
import Snake from "./Snake";

/**
 * Controller class responsible for managing the Snake's actions in the game world.
 */
class SnakeController {
  private snakeWorld__: WorldModel;
  private slitherer__: Snake;

  /**
   * Constructs a new SnakeController instance.
   *
   * @param snakeWorld - The WorldModel representing the game world.
   * @param slitherer - The Snake that this controller manages.
   */
  constructor(snakeWorld: WorldModel, slitherer: Snake) {
    this.snakeWorld__ = snakeWorld;
    this.slitherer__ = slitherer;
  }
  public get slitherer() {
    return this.slitherer__;
  }
  public get snakeWorld() {
    return this.snakeWorld__;
  }
  /**
   * Turns the Snake to the left.
   */
  public turnSnakeLeft() {
    this.slitherer.turnLeft();
  }

  /**
   * Turns the Snake to the right.
   */
  public turnSnakeRight() {
    this.slitherer.turnRight();
  }

  /**
   * Turns the Snake up.
   */
  public turnSnakeUp() {
    this.slitherer.turnUp();
  }

  /**
   * Turns the Snake down.
   */
  public turnSnakeDown() {
    this.slitherer.turnDown();
  }

  /**
   * Retrieves the position of the Snake.
   *
   * @returns The position of the Snake as a Point.
   */
  public get snakePosition() {
    return this.slitherer.position;
  }

  /**
   * Retrieves the direction in which the Snake is currently moving.
   *
   * @returns The direction of the Snake as a string ("up", "down", "left", or "right").
   */
  public get snakeDirection() {
    return this.slitherer.direction;
  }

  /**
   * Retrieves the width of the game world.
   *
   * @returns The width of the game world.
   */
  public get worldWidth() {
    return this.snakeWorld.WorldWidth;
  }

  /**
   * Retrieves the height of the game world.
   *
   * @returns The height of the game world.
   */
  public get worldHeight() {
    return this.snakeWorld.WorldHeight;
  }

  /**
   * Retrieves the Snake that this controller manages.
   *
   * @returns The Snake object.
   */
  public get controlledSnake(): Snake {
    return this.slitherer__;
  }
  /**
   * Retrieves the WorldModel representing the game world.
   *
   * @returns The WorldModel object.
   */
  public get WorldModel() {
    return this.snakeWorld;
  }
}

export default SnakeController;
