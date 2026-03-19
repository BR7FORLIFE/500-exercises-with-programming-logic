package com.files;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite el numero para la secuencia de numeros especiales: ");
        int seleccionUser = input.nextInt();

        SequencyLogic logic = new SequencyLogic(seleccionUser);

        System.out.println(logic.generate());
        System.out.println("Total sum: " + logic.getTotalSum());

        input.close();
    }
}