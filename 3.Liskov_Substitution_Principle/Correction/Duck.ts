import { FlyingBird } from "./FlyingBird";

export class Duck extends FlyingBird{
    constructor(name: string, weight: number){
        super(name, weight);
    }
}