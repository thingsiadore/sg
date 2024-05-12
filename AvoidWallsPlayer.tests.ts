import SnakeController from "./SnakeController";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import Point from "./Point";
import CanvasWorldView from "./CanvasWorldView";
import ActorCollisionHandler from "./ActorCollisionHandlers";

describe("AvoidWallsPlayer Tests", () => {
  let snakeController: SnakeController;
  let snake: Snake;
  let worldModel: WorldModel;
  let player: AvoidWallsPlayer;
  const WorldWidth = 10;
  const WorldHeight = 10;

  beforeEach(() => {
    const collisionHandler = new ActorCollisionHandler();
    worldModel = new WorldModel(10, 10, collisionHandler);
    snake = new Snake("blue", new Point(2, 2), "right", 1);
    worldModel.addActors([snake]);
    snakeController = new SnakeController(worldModel, snake);
    player = new AvoidWallsPlayer([snakeController]);
  });

  it("should turn away from the top wall when moving upwards", () => {
    // Move the snake close to the top wall
    snake.setPosition(new Point(5, 0));
    snake.setDirection("up");

    // Simulate a game tick where AvoidWallsPlayer makes a decision
    player.makeTurn();
    console.log("Snake direction: " + snake.direction);

    // Expect the snake to not continue moving "up" into the wall
    // The exact expectation might depend on how AvoidWallsPlayer is implemented
    // For example, it might turn left or right when encountering a wall directly ahead
    expect(snake.direction).not.toBe("up");
  });
  it("should turn down when moving right and reaching the right edge", () => {
    snake.setPosition(new Point(WorldWidth - 1, 5));
    snake.setDirection("right");

    player.makeTurn();

    expect(snake.direction).not.toBe("right");
    console.log(
      "Test 1 - Snake direction after reaching right edge: " + snake.direction,
    );
  });

  it("should turn up or left when moving down and reaching the bottom edge", () => {
    snake.setPosition(new Point(5, WorldHeight - 1));
    snake.setDirection("down");

    player.makeTurn();

    expect(snake.direction).not.toBe("down");
    console.log(
      "Test 2 - Snake direction after reaching bottom edge: " + snake.direction,
    );
  });

  it("should turn right when moving left and reaching the left edge", () => {
    snake.setPosition(new Point(0, 5));
    snake.setDirection("left");

    player.makeTurn();

    expect(snake.direction).not.toBe("left");
    console.log(
      "Test 3 - Snake direction after reaching left edge: " + snake.direction,
    );
  });
});
