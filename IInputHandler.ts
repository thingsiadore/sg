export default interface IInputHandler {
    madeLeftMove(): boolean;
    madeRightMove(): boolean;
    resetLeftMove(): void;
    resetRightMove(): void;
  }
  