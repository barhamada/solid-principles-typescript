import { MySQLDatabase } from "./MySQLDatabase";

export class BudgetReport {
    private database: MySQLDatabase;

    constructor(database: MySQLDatabase) {
        this.database = database;
    }

    open() {
        this.database.get();
    }

    save() {
        this.database.insert();
    }
}