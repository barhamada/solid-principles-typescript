import { Book } from "./Book";
import { Invoice } from "./Invoice";

const book = new Book('Clean Code', 'Robert C. Martin', 2022, 15);
const invoice = new Invoice(book, 2, .3, .2);

invoice.printInvoice();