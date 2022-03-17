import { Shape } from "./Shape";

export class AreaCalculator {
    area(shapes: Shape[]): number {
        let area = 0;
        for (const shape of shapes) {
            area += shape.area();
        }
        return area;
    }
}