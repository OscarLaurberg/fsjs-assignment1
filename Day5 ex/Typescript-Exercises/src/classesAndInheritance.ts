abstract class Shape {
  private _color: string;

  constructor(color: string) {
    this._color = color;
  }
  get color(): string {
    return this._color;
  }
  set color(newColor: string) {
    this.color=newColor;
  }
  abstract get area(): number;
  abstract get perimeter(): number;
  abstract toString(): string;
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius=radius;
  }

  get getRadius(): number {
    return this.radius;
  }

  get area(): number{
    return Math.PI * this.radius;
  }

  get perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  toString(): string {
    return `The circle is coloured ${super.color} and has a radius of ${this.radius}`
  }
}



class Cylinder extends Circle {
  private _height: number;

  constructor(color:string, radius:number, height:number){
    super(color,radius);
    this._height = height;
  }

  get color(): string {
    return super.color;
  }

  get area(): number {
    return super.area;
  }

  get height(): number {
    return this._height;
  }

  set height(height:number) {
    this._height = height;

  }

  get volume(): number {
    return this.height * Math.PI * super.getRadius * super.getRadius;
  }

  get perimeter(): number {
    throw 'not implemented';
  }

  toString(): string {
    return `Info on cylinder: Color: ${super.color}, Height: ${this.height}, volume: ${this.volume}, area: ${super.area}`;
  }
}

const circle = new Circle("Green", 15);
console.log(circle.color);
console.log(circle.area)
console.log(circle.getRadius)
console.log(circle.perimeter);
console.log(circle.toString());

const cylinder = new Cylinder('yellow', 5, 10);
console.log(cylinder.toString());