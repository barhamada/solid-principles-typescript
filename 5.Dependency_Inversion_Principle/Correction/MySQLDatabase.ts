import { DatabaseInterface } from "./DatabaseInterface";

export class MySQLDatabase implements DatabaseInterface{

    get(): void {
        console.log('Mysql is opened');
    }

    insert(): void {
        
    }

    update(): void {
        
    }

    delete(): void {
        
    }
}