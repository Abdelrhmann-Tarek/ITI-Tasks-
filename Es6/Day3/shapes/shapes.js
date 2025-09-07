
export class Shape { //parent
  constructor(name) {
    this.name = name;
  }

  area() {
    throw new Error("area() must be implemented in subclass");
  }

  perimeter() {
    throw new Error("perimeter() must be implemented in subclass");
  }

  toString() {
    return `${this.name} → Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }
}
export class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}
export class Square extends Rectangle{
    constructor(side){
        super(side,side);
        this.name="Square";

    }



}
export class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}