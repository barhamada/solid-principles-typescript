import { Book } from "./Book";
import { InvoicePersistence } from "./InvoicePersistence";
import { InvoicePrinter } from "./InvoicePrinter";

export class Invoice {

    book: Book;
    quantity: number;
    discountRate: number;
    taxRate: number;
    total: number;
    invoicePrinter: InvoicePrinter;
    invoicePersistence: InvoicePersistence;

    constructor(book: Book, quantity: number, discountRate: number, taxRate: number) {
        this.book = book;
        this.quantity = quantity;
        this.discountRate = discountRate;
        this.taxRate = taxRate;
        this.total = this.calculateTotal();
        this.invoicePrinter = new InvoicePrinter(this);
        this.invoicePersistence = new InvoicePersistence(this);
    }

    calculateTotal(): number {
        const price: number = ((this.book.price - this.book.price * this.discountRate) * this.quantity);
        const priceWithTaxes: number = price + this.book.price + this.taxRate;
        return priceWithTaxes;
    }

    printInvoice(): void {
        this.invoicePrinter.print();
    }

    saveToFile(filename: string): void {
        // Creates a file with given name and writes the invoice
        this.invoicePersistence.saveToFile('example.txt');
    }

}