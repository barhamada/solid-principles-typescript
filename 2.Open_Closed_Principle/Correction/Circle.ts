import { Shape } from "../Correction/Shape";

export class Circle implements Shape{
    radius: number;
    
    constructor(radius: number){
        this.radius = radius;
    }
    
    area(): number {
        return this.radius * this.radius * Math.PI;
    }
}