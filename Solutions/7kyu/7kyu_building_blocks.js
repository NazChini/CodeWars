// Write a class Block that creates a block (Duh..)

// ##Requirements

// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`

//Topics tested : FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | BASIC LANGUAGE FEATURES

class Block {
  constructor(data) {
    //array destructuring
    [this.w, this.l, this.h] = data;
  }

  getWidth() {
    return this.w;
  }
  getLength() {
    return this.l;
  }
  getHeight() {
    return this.h;
  }

  getVolume() {
    //object destructuring
    let { w, l, h } = this;
    return w * l * h;
  }

  getSurfaceArea() {
    let { w, l, h } = this;
    return 2 * (w * l + l * h + h * w);
  }
}
