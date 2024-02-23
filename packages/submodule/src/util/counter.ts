export type Counter = (count: number) => number;
export const incrementCounter: Counter = count => count + 1;
export const decrementCounter: Counter = count => count - 1;
