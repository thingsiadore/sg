import SnakeController from "./SnakeController";

/**
 * Abstract class representing a player in the Snake game.
 * Subclasses of Player define specific player behaviors.
 */
abstract class Player {
  protected scs: SnakeController[];

  /**
   * Constructs a new Player instance.
   *
   * @param snakeController - The SnakeController associated with the player.
   */
  constructor(snakeControllers: SnakeController[]) {
    this.scs = snakeControllers;
  }

  /**
   * Abstract method that defines the behavior of the player for making a turn in the game.
   * Subclasses must implement this method to specify the player's logic for making a turn.
   */
  abstract makeTurn(): void;
}

export default Player;
