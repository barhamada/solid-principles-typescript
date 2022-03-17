import { Shape } from "../Correction/Shape";

export class Rectangle implements Shape{
    width: number;
    height: number;
    
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    
    area(): number {
        return this.width * this.height;
    }
}