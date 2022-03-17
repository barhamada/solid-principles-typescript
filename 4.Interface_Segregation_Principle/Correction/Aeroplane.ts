import { Flyable } from "./Flyable";
import { Movable } from "./Movable";
import { Vehicle } from "./Vehicle";

export class Aeroplane implements Vehicle, Movable, Flyable{
    private price: number;
    private color: string;

    setPrice(price: number): void {
        this.price = price;
    }
    setColor(color: string): void {
        this.color = color;
    }
    start(): void {
        console.log('Aeroplane starts');
    }
    stop(): void {
        console.log('Aeroplane stops');
    }
    fly(): void {
        console.log('Aeroplane flies');
    }
}