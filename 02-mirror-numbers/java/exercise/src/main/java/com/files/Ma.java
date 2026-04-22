package com.files;

import java.util.Scanner;

public class Ma {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite un numero para generar numeros palindromos:  ");
        int userSeleccion = input.nextInt();

        PalindromeNumber palindromeNumber = new PalindromeNumber(userSeleccion);

        // testear si un numero es palindromo
        if (palindromeNumber.testPalindrome()) {
            System.out.println("Es un numero palindromo!");
        } else {
            System.out.println("no es un numero palindromo!");
        }

        // generar numeros palindromos
        System.out.println("Lista de numeros palindromos: " + palindromeNumber.generateNumberPalindrome());

        input.close();
    }
}