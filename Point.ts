export default class Point {
  private x_coordinate__: number;
  private y_coordinate__: number; // Corrected typo in 'y_coordinate'

  constructor(x: number, y: number) {
    this.x_coordinate__ = x;
    this.y_coordinate__ = y;
  }
  public equals(other: Point): boolean {
    return this.x === other.x && this.y === other.y;
  }

  public get x(): number {
    /**
     * Gets the x coordinate of the point.
     * @returns the x coordinate
     */
    return this.x_coordinate__;
  }

  public get y(): number {
    /**
     * Gets the y coordinate of the point.
     * @returns the y coordinate
     */
    return this.y_coordinate__;
  }

  public get Position(): Point {
    /**
     * Gets the position of the point.
     * @returns a new Point object with the same coordinates
     */
    return new Point(this.x, this.y);
  }
}
