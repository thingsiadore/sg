import WorldModel from "./WorldModel";
import Player from "./Player";
import HumanPlayer from "./HumanPlayer";

export default class GameController {
  private _world: WorldModel;
  private _player1: Player | null;
  private _player2: Player | null;
  private lastTime: number = 0;

  constructor(worldModel: WorldModel) {
    this._world = worldModel;
    this._player1 = null;
    this._player2 = null;
  }

  set player1(player1: HumanPlayer) {
    this._player1 = player1;
  }

  set player2(player2: Player) {
    this._player2 = player2;
  }

  run(): void {
    this.lastTime = 0;
    requestAnimationFrame(this.updateFrame.bind(this));
  }

  private updateFrame(): void {
    // Assuming both Player and WorldModel have the required methods
    this._player1!.makeTurn();
    this._player2!.makeTurn();

    const now = performance.now();
    const deltaTime = now - this.lastTime;
    console.log(deltaTime);

    if (deltaTime > 250) {
      this._world.update(1); // Update world by one step
      this.lastTime += 50;
    }

    requestAnimationFrame(this.updateFrame.bind(this));
  }
}
