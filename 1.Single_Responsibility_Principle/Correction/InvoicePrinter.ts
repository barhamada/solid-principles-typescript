import { Invoice } from "./Invoice";

export class InvoicePrinter {
    invoice: Invoice;

    constructor(invoice: Invoice) {
        this.invoice = invoice;
    }

    print(): void {
        console.log(`${this.invoice.quantity} x ${this.invoice.book.name} ${this.invoice.book.price} $`);
        console.log(`Discount Rate: ${this.invoice.discountRate}`);
        console.log(`Tax Rate: ${this.invoice.taxRate}`);
        console.log(`Total: ${this.invoice.total}`);
    }
}