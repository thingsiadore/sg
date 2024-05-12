import Player from "./Player";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";
import AvoidWallsPlayer from "./AvoidWallsPlayer";

export default class HumanPlayer extends Player {
  private controller: SnakeController;
  private handler: IInputHandler;

  constructor(controller: SnakeController, handler: IInputHandler) {
    super([controller]); // Assuming the Player's constructor doesn't require parameters. Adjust if necessary.
    this.controller = controller;
    this.handler = handler;
  }

  makeTurn(): void {
    // Check if a left move should be made
    if (this.handler.madeLeftMove() === true) {
      console.log("Handler made left move: " + this.handler.madeLeftMove());
      this.controller.turnSnakeLeft();
      this.handler.resetLeftMove();
    }
    // Check if a right move should be made
    else if (this.handler.madeRightMove() === true) {
      console.log("Handler made right move: " + this.handler.madeRightMove());
      this.controller.turnSnakeRight();
      this.handler.resetRightMove();
    }
  }

  // Implement any other methods required by the Player interface here
}
