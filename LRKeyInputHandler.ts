// LRKeyInputHandler.ts
import IInputHandler from "./IInputHandler";

export default class LRKeyInputHandler implements IInputHandler {
  private wasLeftArrowPushed: boolean = false;
  private wasRightArrowPushed: boolean = false;

  constructor() {
    // Set up event listeners for keydown events
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "ArrowLeft") {
      this.wasLeftArrowPushed = true;
      console.log("ArrowLeft was pushed");
    } else if (event.key === "ArrowRight") {
      this.wasRightArrowPushed = true;
      console.log("ArrowRight was pushed");
    }
  }

  public madeLeftMove(): boolean {
    return this.wasLeftArrowPushed;
  }

  public madeRightMove(): boolean {
    return this.wasRightArrowPushed;
  }

  public resetLeftMove(): void {
    this.wasLeftArrowPushed = false;
  }

  public resetRightMove(): void {
    this.wasRightArrowPushed = false;
  }
}
