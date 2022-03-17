import { Aeroplane } from "./Aeroplane";
import { Car } from "./Car";

const car = new Car();
car.setPrice(12.000);
car.setColor('Black');
car.start();
car.stop();

console.log('\n--------------------------------\n');

const aeroplane = new Aeroplane();
aeroplane.setPrice(320.000);
aeroplane.setColor('White');
aeroplane.start();
aeroplane.stop();
aeroplane.fly();