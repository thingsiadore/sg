import WorldModel from "./WorldModel";
import WorldView from "./CanvasWorldView";
import Snake from "./Snake";
import Point from "./Point";

describe("CanvasWorldView class", () => {
  let worldView: WorldView;
  let worldModel: WorldModel;
  const scalingFactor = 5;

  beforeEach(() => {
    // Setup for each test case
    const snake = new Snake("blue", new Point(2, 2), "right", 1);
    worldModel = new WorldModel(100, 100);
    worldView = new WorldView(scalingFactor);
    worldModel.addSnakes([snake]);

    // Assuming your WorldView class has methods to access the canvas and context
    // If not, you might need to adjust your class design to make it testable
  });

  test("scaling factor provided to constructor is correctly assigned to the class's private member", () => {
    expect(worldView.scaleFactor).toBe(scalingFactor);
  });

  test("Ensure that a canvas element is created and appended to the document body.", () => {
    // Assuming worldView has a property or method to access the underlying canvas
    const canvasIsInBody = document.body.contains(worldView.canvas);
    expect(canvasIsInBody).toBeTruthy();
  });

  test("Confirm that the context of the canvas is correctly obtained and is an instance of CanvasRenderingContext2D", () => {
    const contextIsInstanceOfCanvasRenderingContext2D =
      worldView.conText instanceof CanvasRenderingContext2D;
    expect(contextIsInstanceOfCanvasRenderingContext2D).toBeTruthy();
  });

  test("The canvas should initially not have a set width and height until display is called", () => {
    expect(worldView.canvas.width).toBe(0);
    expect(worldView.canvas.height).toBe(0);
  });

  test("The canvas size is correctly set based on the WorldModel dimensions and the scaling factor", () => {
    worldView.display(worldModel);
    expect(worldView.canvas.width).toBe(worldModel.WorldWidth * scalingFactor);
    expect(worldView.canvas.height).toBe(
      worldModel.WorldHeight * scalingFactor,
    );
  });

  test("snake's head is drawn at the correct position", () => {
    // Mock the fillRect method of the canvas context
    const fillRectMock = jest.fn();
    worldView.conText.fillRect = fillRectMock;

    worldView.display(worldModel);
    const expectedX = worldModel.position.x * scalingFactor;
    const expectedY = worldModel.position.y * scalingFactor;

    // Verify that fillRect was called with the correct arguments
    expect(fillRectMock).toHaveBeenCalledWith(
      expectedX,
      expectedY,
      scalingFactor,
      scalingFactor,
    );
  });
});
