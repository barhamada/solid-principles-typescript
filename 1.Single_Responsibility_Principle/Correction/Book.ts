export class Book {
    name: string;
    authorName: string;
    year: number;
    price: number;

    constructor(name: string, authorName: string, year: number, price: number) {
        this.name = name;
        this.authorName = authorName;
        this.year = year;
        this.price = price;
    }
}