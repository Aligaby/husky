export const sum: Sum = (a, b) => a + b;

interface Sum {
  (a: number, b: number): number;
}
