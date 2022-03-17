export class Book {
    name: string;
    authorName: string;
    year: number;
    price: number;
    isbn: string;

    constructor(name: string, authorName: string, year: number, price: number, isbn: string) {
        this.name = name;
        this.authorName = authorName;
        this.year = year;
        this.price = price;
        this.isbn = isbn;
    }
}