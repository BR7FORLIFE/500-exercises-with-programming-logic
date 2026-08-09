package com.files;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>(List.of(1, 3, 5));
        Integer target = 0;

        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite un numero: ");
        target = scanner.nextInt();

        System.out.println(OptimusChange.evaluate(numbers, target));

        scanner.close();
    }
}