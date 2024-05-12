import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./Point";
import IActor from "./IActor";
import ActorCollisionHandler from "./ActorCollisionHandlers";
import ICollidable from "./ICollidable";
describe("WorldModel Tests", () => {
  let Model: WorldModel;
  let snake: Snake;
  const color = "red";
  const size = 1;
  let startingPosition = new Point(3, 3);
  let handler = new ActorCollisionHandler();
  beforeEach(() => {
    snake = new Snake(color, startingPosition, "right", size);
    Model = new WorldModel(10, 10, handler);
    Model.addActors([snake]);
  });

  test("WorldModel updates the Snake's position correctly", () => {
    Model.update(3);
    expect(snake.position.x).toBe(6);
    expect(snake.position.y).toBe(3);
  });

  test("Snake turns right and WorldModel updates its position correctly", () => {
    snake.turnRight();
    Model.update(2);
    expect(snake.position.x).toBe(3);
    expect(snake.position.y).toBe(5);
  });
  test("Snake turns right twice and WorldModel updates its position correctly", () => {
    snake.turnRight();
    snake.turnRight();
    Model.update(2);
    expect(snake.position.x).toBe(1);
    expect(snake.position.y).toBe(3);
  });
  test("Snake turns right 3 times and WorldModel updates its position correctly", () => {
    snake.turnRight();
    snake.turnRight();
    snake.turnRight();
    Model.update(2);
    expect(snake.position.x).toBe(3);
    expect(snake.position.y).toBe(1);
  });
  test("Snake turns right 4 times and WorldModel updates its position correctly", () => {
    snake.turnRight();
    snake.turnRight();
    snake.turnRight();
    snake.turnRight();
    Model.update(2);
    expect(snake.position.x).toBe(5);
    expect(snake.position.y).toBe(3);
  });

  test("Snake turns left and WorldModel updates its position correctly", () => {
    snake.turnLeft();
    Model.update(1);
    expect(snake.position.x).toBe(3);
    expect(snake.position.y).toBe(2);
  });
  test("Snake turns left twice and WorldModel updates its position correctly", () => {
    snake.turnLeft();
    snake.turnLeft();
    Model.update(1);
    expect(snake.position.x).toBe(2);
    expect(snake.position.y).toBe(3);
  });
  test("Snake turns left thrice and WorldModel updates its position correctly", () => {
    snake.turnLeft();
    snake.turnLeft();
    snake.turnLeft();
    Model.update(1);
    expect(snake.position.x).toBe(3);
    expect(snake.position.y).toBe(4);
  });
  test("Snake turns left 4 tiems and WorldModel updates its position correctly", () => {
    snake.turnLeft();
    snake.turnLeft();
    snake.turnLeft();
    snake.turnLeft();
    Model.update(1);
    expect(snake.position.x).toBe(4);
    expect(snake.position.y).toBe(3);
  });
});
