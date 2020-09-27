"use strict";
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() {
        return this._color;
    }
    set color(newColor) {
        this.color = newColor;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
    get area() {
        return Math.PI * this.radius;
    }
    get perimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `The circle is coloured ${super.color} and has a radius of ${this.radius}`;
    }
}
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get color() {
        return super.color;
    }
    get area() {
        return super.area;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
    get volume() {
        return this.height * Math.PI * super.getRadius * super.getRadius;
    }
    get perimeter() {
        throw 'not implemented';
    }
    toString() {
        return `Info on cylinder: Color: ${super.color}, Height: ${this.height}, volume: ${this.volume}, area: ${super.area}`;
    }
}
const circle = new Circle("Green", 15);
console.log(circle.color);
console.log(circle.area);
console.log(circle.getRadius);
console.log(circle.perimeter);
console.log(circle.toString());
const cylinder = new Cylinder('yellow', 5, 10);
console.log(cylinder.toString());
//# sourceMappingURL=classesAndInheritance.js.map