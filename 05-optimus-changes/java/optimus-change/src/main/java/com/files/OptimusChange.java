package com.files;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class OptimusChange {
    public static Map<String, List<Integer>> evaluate(ArrayList<Integer> numbers, Integer target) {
        int acc = 0;

        for (int i = 0; i < numbers.size(); i++) {

            for (int j = numbers.size() - 1; j >= 0; j--) {
                acc = numbers.get(i) + numbers.get(j);

                if (acc == target) {
                    return Map.of("Objetivo encontrado!", List.of(numbers.get(i), numbers.get(j)));
                }
            }
        }

        return Map.of("Objetivo no encontrado", null);
    }
}
