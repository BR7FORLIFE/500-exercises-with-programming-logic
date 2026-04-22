package com.files;

import java.util.ArrayList;
import java.util.function.BiFunction;

public class Main {
    public static void main(String[] args) {

        // calculateOptimusRoute([
        // [1, 3, 1],
        // [1, 5, 1],
        // [4, 2, 1],
        // ]);

        int[][] matrix = {
                { 1, 3, 1 },
                { 1, 5, 1 },
                { 4, 2, 1 }
        };

        System.out.println(calculateOptimusRoute(matrix));
    }

    public static int calculateOptimusRoute(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        // Aplanar matriz
        int[] flat = new int[rows * cols];
        int index = 0;
        for (int[] row : matrix) {
            for (int value : row) {
                flat[index++] = value;
            }
        }

        int[] dp = new int[flat.length];

        BiFunction<Integer, Integer, Integer> getIndex = (i, j) -> i * cols + j;
        dp[0] = flat[0];

        for (int j = 1; j < cols; j++) {
            dp[getIndex.apply(0, j)] = dp[getIndex.apply(0, j - 1)] + flat[getIndex.apply(0, j)];
        }

        for (int i = 1; i < rows; i++) {
            dp[getIndex.apply(i, 0)] = dp[getIndex.apply(i - 1, 0)] + flat[getIndex.apply(i, 0)];
        }

        for (int i = 1; i < rows; i++) {
            for (int j = 1; j < cols; j++) {
                dp[getIndex.apply(i, j)] = Math.min(
                        dp[getIndex.apply(i - 1, j)],
                        dp[getIndex.apply(i, j - 1)]) + flat[getIndex.apply(i, j)];
            }
        }

        return dp[getIndex.apply(rows - 1, cols - 1)];
    }
}