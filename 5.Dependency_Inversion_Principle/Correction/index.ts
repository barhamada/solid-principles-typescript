import { BudgetReport } from "./BudgetReport";
import { MongoDB } from "./MongoDB";
import { MySQLDatabase } from "./MySQLDatabase";

const mysql = new MySQLDatabase();
const mysqlReport = new BudgetReport(mysql);
mysqlReport.open();

const mongo = new MongoDB();
const mongoReport = new BudgetReport(mongo);
mongoReport.open();