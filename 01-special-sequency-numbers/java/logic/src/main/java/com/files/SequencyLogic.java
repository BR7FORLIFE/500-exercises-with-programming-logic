package com.files;

import java.util.ArrayList;
import java.util.List;

public class SequencyLogic {

    private final int number;
    private Integer totalSum;

    public SequencyLogic(int number) {
        this.number = number;
    }

    public List<Integer> generate() {

        if (this.number <= 3) {
            throw new IllegalStateException("El numero no puede ser igual o menor que 3! (no es un numero especial)");
        }

        List<Integer> result = new ArrayList<>();

        int index = 1;
        int oldState = 0;

        while (true) {
            if ((index % 2 == 0) || (index % 3 == 0)) {
                index++;
                continue;
            }

            result.add(index);
            oldState = index;

            if (index > 1) {
                boolean ispar = (index + oldState) % 2 == 0;

                if (!ispar) {
                    result.add(index);
                    oldState = index;
                }
            }

            System.out.println("Generacion de lista: " + result);
            System.out.println("oldState" + oldState);

            if (result.size() == this.number) {
                break;
            }

            index++;
        }

        int sum = 0;
        for (int i = 0; i < result.size(); i++) {
            sum += result.get(i);
        }

        this.totalSum = sum;

        return result;
    }

    public Integer getTotalSum() {
        return totalSum;
    }
}
