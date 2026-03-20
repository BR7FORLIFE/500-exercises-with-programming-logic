package com.files;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        /**
         * Teorema del 3x+1
         * 
         * requisitos:
         * 
         * si el numero es par dividirlo entre 2
         * 
         * si el numero es impar multiplicarlo por 3 y sumarle 1
         */

        /**
         * Objetivo
         * 
         * - llegar esta 1
         * - los pasos que le tomo para llegar a 1
         * - mostrar la secuencia generada
         * - valor maximo en la secuencia
         */

        Scanner input = new Scanner(System.in);

        System.out.println("Digite un numero: ");
        int userSelection = input.nextInt();

        CollatzConjeture collatzConjeture = new CollatzConjeture(userSelection);

        System.out.println("Pasos: " + collatzConjeture.generateCollatzList());

    }
}