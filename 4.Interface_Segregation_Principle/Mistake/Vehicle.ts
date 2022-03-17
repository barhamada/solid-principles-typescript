export interface Vehicle{
    setPrice(price: number): void;
    setColor(color: string): void;
    start(): void;
    stop(): void;
    fly(): void;
}