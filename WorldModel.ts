import Snake from "./Snake";
import IWorldView from "./IWorldView";
import IActor from "./IActor";
import ActorCollisionHandler from "./ActorCollisionHandlers";
import ArrayIterator from "./ArrayIterator";
import ICollidable from "./ICollidable";
export default class WorldModel {
  private allActors: IActor[];
  private allViews: IWorldView[];
  private width_: number;
  private height_: number;
  private aca: ActorCollisionHandler;
  constructor(width: number, height: number, aca: ActorCollisionHandler) {
    this.width_ = width;
    this.height_ = height;
    this.allActors = [];
    this.allViews = [];
    this.aca = aca;
  }
  public addActors(actors: IActor[]) {
    this.allActors = this.allActors.concat(actors)
  }

  public addViews(views: IWorldView[]) {
    this.allViews = this.allViews.concat(views);
  }
  public get actors() {
    return this.allActors;
  }
  public get position() {
    return new ArrayIterator(this.actors);
  }
  public get views() {
    return this.allViews;
  }
  public get WorldWidth() {
    return this.width_;
  }
  public get WorldHeight() {
    return this.height_;
  }
  public *getSnakes(): Generator<Snake> {
    for (const actor of this.allActors) {
      if (actor instanceof Snake) {
        yield actor;
      }
    }
  }

  public update(steps: number) {
    const isCollidable = (object: any): object is ICollidable => {
      return "didCollideWithObject" in object;
    };
    let collidedArray: IActor[] = [];
    // Iterate over allSnakes and call move on each Snake instance
    this.allActors.forEach((actor) => {
      actor.move(steps);
    });

    this.allActors.forEach((actor, i) => {
      this.allActors.forEach((other, j) => {
        if (
          i !== j &&
          isCollidable(actor) &&
          isCollidable(other) &&
          actor.didCollideWithObject(other)
        ) {
          // Avoid adding the same snake more than once
          if (!collidedArray.includes(actor)) {
            collidedArray.push(actor);
            console.log("COLLISION", collidedArray);
          }
        }
      });
    });
    // Remove collided snakes
    collidedArray.forEach((collided) => {
      const index = this.allActors.indexOf(collided);
      if (index > -1) {
        this.allActors.splice(index, 1);
      }
    });

    // Update all views once after handling game logic
    this.allViews.forEach((view) => {
      view.display(this);
    });

    console.log(this.allActors);
  }
}
