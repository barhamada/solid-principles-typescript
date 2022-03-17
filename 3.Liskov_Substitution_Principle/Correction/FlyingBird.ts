import { Bird } from "./Bird";

export class FlyingBird extends Bird{
    
    constructor(name: string, weight: number){
        super(name, weight);
    }

    fly(): void{
        console.log('I believe I can flyyyyyyy');
    }
}