package com.files;

import java.util.ArrayList;
import java.util.List;

public class CollatzConjeture {
    private int number;

    public CollatzConjeture(int number) {
        this.number = number;
    }

    public List<Integer> generateCollatzList() {
        if (this.number <= 0) {
            throw new IllegalStateException("El numero no puede ser 0 o negativo!");
        }

        List<Integer> result = new ArrayList<>();

        int state = this.number;
        int currentResult = 0;

        while (true) {

            if (state == 1) {
                break;
            }

            if (state % 2 == 0) {
                currentResult = state / 2;
                result.add(currentResult);
                state = currentResult;
                continue;
            } else {
                currentResult = (state * 3) + 1;
                result.add(currentResult);
                state = currentResult;
                continue;
            }
        }

        System.out.println("Numero de pasos: " + result.size());

        int acc = 0;
        for (int number : result) {
            if (number > acc) {
                acc = number;
                continue;
            }
        }

        System.out.println("Valor maximo de la secuencia: " + acc);

        return result;
    }
}
