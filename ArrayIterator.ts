export default class ArrayIterator<T> {
    private index: number;
    private arr: T[];
    constructor(arr: T[]) {
      this.arr = arr;
      this.index = 0;
    }
    next(): { value: T | undefined; done: boolean } {
      if (this.index < this.arr.length) {
        // Capture the current value at the index
        const value = this.arr[this.index];
        // Increment the index for the next call
        this.index++;
        // Return the current element and done as false
        return { value, done: false };
      } else {
        // When the index reaches or exceeds the length, return undefined for value and true for done
        return { value: undefined, done: true };
      }
    }
  }
  