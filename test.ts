interface Point {
  x: number;
  y: number;
}

function distance(a: Point, b: Point) {
  return Math.sqrt(
    Math.pow(a.x - b.x, 2) +
    Math.pow(a.y - b.y, 2)
  );
}

let p1: Point = { x: 0, y: 0 };
let p2: Point = { x: 1, y: 1};

distance(p1, p2);

class Cow {
  private name = 'Alice';

  public makeSound() {
    console.log('Moo!');
  }
}

export { Cow, distance };