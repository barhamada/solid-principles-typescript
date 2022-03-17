import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

export class AreaCalculator {
    Area(shapes: any[]): number {
        let area = 0;
        for (const shape of shapes) {
            if (shape.type === 'Rectangle') {
                const rectangle = shape as Rectangle;
                area += rectangle.width * rectangle.height;
            }
            else {
                const circle = shape as Circle;
                area += circle.radius * circle.radius * Math.PI;
            }
        }
        return area;
    }
}