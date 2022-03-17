import { AreaCalculator } from "./AreaCalulator"
import { Circle } from "./Circle"
import { Rectangle } from "./Rectangle"

const shapes = [
    // new Circle(2),
    new Rectangle(10, 15),
    new Rectangle(5, 10)
]
const calculator = new AreaCalculator();

const area = calculator.area(shapes);

console.log(`Total area = ${area}`);