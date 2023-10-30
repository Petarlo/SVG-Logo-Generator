// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle with a blue background to render
describe("Triangle", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Triangle();
    shape.shapeColour("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Unit testing -> testing for a square with a blue background to render
describe("Square", () => {
  test("test for a square with a blue background", () => {
    const shape = new Square();
    shape.shapeColour("purple");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});

// Unit testing -> testing for a circle with a #ca00ca background to render
describe("Circle", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = new Circle();
    shape.shapeColour("#ca00ca");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});