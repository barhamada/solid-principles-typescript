import { Invoice } from "./Invoice";

export class InvoicePersistence {
    invoice: Invoice;

    constructor(invoice: Invoice) {
        this.invoice = invoice;
    }

    saveToFile(filename: string): void {
        // Creates a file with given name and writes the invoice
    }
}