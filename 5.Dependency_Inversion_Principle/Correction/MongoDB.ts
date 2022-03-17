import { DatabaseInterface } from "./DatabaseInterface";

export class MongoDB implements DatabaseInterface {
    get(): void {
        console.log('MongoDB is opened');
    }

    insert(): void {

    }

    update(): void {

    }

    delete(): void {

    }
}