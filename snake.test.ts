import Snake from "./Snake";
import Point from "./Point";
import WorldModel from "./WorldModel";
import ActorCollisionHandler from "./ActorCollisionHandlers";
import ICollidable from "./ICollidable";

describe("Snake Class Tests", () => {
  let snake: Snake;
  const startingPosition = new Point(5, 5);
  const size = 10;
  const color = "green";

  beforeEach(() => {
    snake = new Snake(color, startingPosition, "right", size);
    const worldModel = new WorldModel(50, 50, new ActorCollisionHandler());
    worldModel.addActors([snake]);
  });

  test("Snake initializes with correct properties", () => {
    expect(snake.color__).toBe(color);
    expect(snake.position).toEqual(startingPosition);
    expect(snake.size).toBe(size);
    expect(snake.direction).toBe("right");
    expect(snake.parts.length).toBe(size);
  });

  describe("Movement", () => {
    test("moves right correctly", () => {
      snake.move(1);
      expect(snake.position).toEqual(
        new Point(startingPosition.x + 1, startingPosition.y),
      );
    });

    test("moves left correctly", () => {
      snake.setDirection("left");
      snake.move(1);
      expect(snake.position).toEqual(
        new Point(startingPosition.x - 1, startingPosition.y),
      );
    });

    test("moves up correctly", () => {
      snake.setDirection("up");
      snake.move(1);
      expect(snake.position).toEqual(
        new Point(startingPosition.x, startingPosition.y - 1),
      );
    });

    test("moves down correctly", () => {
      snake.setDirection("down");
      snake.move(1);
      expect(snake.position).toEqual(
        new Point(startingPosition.x, startingPosition.y + 1),
      );
    });
  });

  describe("Collision Detection", () => {
    const snake1 = new Snake("red", new Point(1, 1), "right", 6);
    const snake2 = new Snake("blue", new Point(3, 3), "right", 6);
    test("detects no collision on open move", () => {
      snake1.move(1);
      snake2.move(1);
      expect(snake1.didCollideWithObject(snake2)).toBe(false);
      expect(snake2.didCollideWithObject(snake1)).toBe(false);
    });
  });

  test("detects collisions between two snakes", () => {
    const snake2 = new Snake("red", new Point(5, 5), "up", 6);
    // Moves snake to set up self-collision
    expect(snake.didCollideWithObject(snake2)).toBe(true);
  });
  test("detects self-collision", () => {
    // Initialize the snake in a way that it forms a loop
    snake = new Snake("green", new Point(2, 2), "right", 6);
    snake.currentParts__ = [
      new Point(2, 2), // head
      new Point(3, 2),
      new Point(4, 2),
      new Point(4, 3),
      new Point(4, 4),
      new Point(3, 4),
      new Point(2, 4),
      new Point(2, 3),
    ]; // next move to this position will cause self-collision
    snake.move(1);
    expect(snake.didCollideWithObject(snake)).toBe(true);
  });
});
