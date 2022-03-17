import { Bird } from "./Bird";

export class Duck extends Bird{
    constructor(name: string, weight: number){
        super(name, weight);
    }
}