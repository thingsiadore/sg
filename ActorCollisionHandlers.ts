import ICollidable from "./ICollidable";
import ICollisionHandler from "./ICollisionHandler";
import SnakeCollisionHandler from "./SnakeCollisionHandler";
import SnakeFoodCollsionHandler from "./SnakeFoodCollisionHandler";

export default class ActorCollisionHandler {
  private pairs: Map<string, ICollisionHandler>;
  constructor() {
    this.pairs = new Map();
    this.pairs.set(this.toKey("Snake", "Food"), new SnakeFoodCollsionHandler());
    this.pairs.set(this.toKey("Snake", "Snake"), new SnakeCollisionHandler());
  }
  private toKey(colliderType: string, collidedType: string): string {
    return `${colliderType},${collidedType}`;
  }
  public addCollisionAction(
    colliderType: string,
    collidedType: string,
    actionApplicator: ICollisionHandler,
  ) {
    const key = this.toKey(colliderType, collidedType);

    this.pairs.set(key, actionApplicator);
  }

  private hasCollisionAction(
    colliderType: string,
    collidedType: string,
  ): boolean {
    const key = this.toKey(colliderType, collidedType);
    return this.pairs.has(key);
  }

  private applyCollisionAction(
    colliderType: ICollidable,
    collidedType: ICollidable,
  ): void {
    const key = this.toKey(colliderType.type, collidedType.type);
    if (this.pairs.has(key)) {
      const handler = this.pairs.get(key);
      if (handler) {
        handler.applyAction(colliderType, collidedType);
      } else {
        console.error(`No handler found for key: ${key}`);
      }
    } else {
      console.error(
        `No collision action defined for ${colliderType} and ${collidedType}`,
      );
    }
  }
}
