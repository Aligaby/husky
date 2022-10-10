export const sum: Operations = (a, b) => a + b;

export const subtr: Operations = (a, b) => a - b;
interface Operations {
  (a: number, b: number): number[];
}
