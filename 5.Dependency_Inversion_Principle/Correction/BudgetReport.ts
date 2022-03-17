import { DatabaseInterface } from "./DatabaseInterface";
import { MySQLDatabase } from "./MySQLDatabase";

export class BudgetReport {
    private database: DatabaseInterface;

    constructor(database: DatabaseInterface) {
        this.database = database;
    }

    open() {
        this.database.get();
    }

    save() {
        this.database.insert();
    }
}