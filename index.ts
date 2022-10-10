const sum: Sum = (...arrayNum) => {
  [...arrayNum].reduce((sum, next) => sum + next, 0);
};

interface Sum {
  (arrayNum: number[]): number;
}
