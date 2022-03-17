import { Duck } from "./Duck";
import { Ostrich } from "./Ostrich";

const duck = new Duck('Donald', 8);
const ostrich = new Ostrich('Ronaldo', 70);

duck.hello();
duck.fly();

console.log();

ostrich.hello();