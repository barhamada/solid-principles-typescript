import { Vehicle } from "./Vehicle";

export class Car implements Vehicle{
    private price: number;
    private color: string;

    setPrice(price: number): void {
        this.price = price;
    }
    setColor(color: string): void {
        this.color = color;
    }
    start(): void {
        console.log('Car starts');
    }
    stop(): void {
        console.log('Car stops');
    }
    fly(): void {}

}