import WorldModel from "./WorldModel";
export default interface IWorldView {
  display(model: WorldModel): void;
}
