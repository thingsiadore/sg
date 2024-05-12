import Point from "./Point";

describe("Point class", () => {
  test("constructor should correctly assign x and y coordinates", () => {
    const x = 5;
    const y = 10;
    const point = new Point(x, y);

    expect(point.x).toBe(x);
    expect(point.y).toBe(y);
  });

  test("getX method should return the correct x coordinate", () => {
    const x = 3;
    const point = new Point(x, 0);

    expect(point.x).toBe(x);
  });

  test("getY method should return the correct y coordinate", () => {
    const y = 4;
    const point = new Point(0, y);

    expect(point.y).toBe(y);
  });
});
