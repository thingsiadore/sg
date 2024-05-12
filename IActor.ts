import ICollidable from "./ICollidable";
export default interface IActor {
  update(): void;
  move(steps: number): void;
}
