function calculateOptimusRoute(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const flat = matrix.flat();
  const dp = new Array(flat.length).fill(0);

  const getIndex = (i, j) => i * cols + j;

  dp[0] = flat[0];

  for (let j = 1; j < cols; j++) {
    dp[getIndex(0, j)] = dp[getIndex(0, j - 1)] + flat[getIndex(0, j)];
  }

  for (let i = 1; i < rows; i++) {
    dp[getIndex(i, 0)] = dp[getIndex(i - 1, 0)] + flat[getIndex(i, 0)];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[getIndex(i, j)] =
        Math.min(dp[getIndex(i - 1, j)], dp[getIndex(i, j - 1)]) +
        flat[getIndex(i, j)];
    }
  }

  return dp[getIndex(rows - 1, cols - 1)];
}

calculateOptimusRoute([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
