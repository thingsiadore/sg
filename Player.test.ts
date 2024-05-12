import SnakeController from "./SnakeController";
import Player from "./Player";
import Snake from "./Snake";
import WorldModel from "./WorldModel"; // Import the Player class
import Point from "./Point";

describe("Player Tests", () => {
  let snakeController: SnakeController[];

  // Create a SnakeController instance before each test
  beforeEach(() => {
    // Create a mock WorldModel and Snake instance for SnakeController
    const mockSnake = new Snake("blue", new Point(0, 0), "right", 1);
    const mockWorldModel = new WorldModel(10, 10);

    let snakeController = new SnakeController(mockWorldModel, mockSnake);
  });
  it("should initialize Player with SnakeController", () => {
    // Create a concrete Player subclass
    class TestPlayer extends Player {
      makeTurn(): void {
        const snake = new Snake("blue", new Point(0, 0), "right", 1);
        const worldModel = new WorldModel(10, 10);
        const direction = snake.direction;
        const position = snake.position;
        const worldHeight = worldModel.WorldHeight;
        const worldWidth = worldModel.WorldWidth;

        if (direction === "left" && position.x === 0) {
          snake.turnLeft();
          return;
        }

        if (direction === "right" && position.x === worldWidth - 1) {
          snake.turnRight();
          return;
        }

        if (direction === "up" && position.y === 0) {
          snake.turnLeft();
          snake.turnLeft();
          return;
        }

        if (direction === "down" && position.y === worldHeight - 1) {
          snake.turnRight();
          snake.turnRight();
          return;
        }
      }
    }

    // Create an instance of the TestPlayer class
    const testPlayer = new TestPlayer(snakeController);

    // Verify that Player has a reference to SnakeController
    expect(testPlayer).toHaveProperty("sc", snakeController);
  });

  it("should implement makeTurn method", () => {
    // Create a concrete Player subclass
    class TestPlayer extends Player {
      // Override the makeTurn method
      makeTurn(): void {
        // Implement the makeTurn method
      }
    }

    // Create an instance of the TestPlayer class
    const testPlayer = new TestPlayer(snakeController);

    // Call the makeTurn method and expect no errors
    expect(() => testPlayer.makeTurn()).not.toThrow();
  });
});
