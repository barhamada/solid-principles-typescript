export class Bird{
    private name: string;
    private weight: number;

    constructor(name: string, weight: number){
        this.name = name;
        this.weight = weight;
    }

    hello(): void{
        console.log(`Hello my name is ${this.name} and I weigh ${this.weight} pounds`);
    }
}