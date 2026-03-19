package com.files;

import java.util.ArrayList;
import java.util.List;

public class PalindromeNumber {
    private final int userSeleccion;

    public PalindromeNumber(int userSeleccion) {
        this.userSeleccion = userSeleccion;
    }

    private Integer invertedNumber(int number) {

        String[] numberSplit = Integer.toString(number).split("");
        List<String> transformNumber = new ArrayList<>();

        int i = 0;
        for (int index = numberSplit.length; index > 0; index--) {
            transformNumber.add(numberSplit[index - 1]);
            i++;
        }

        transformNumber.toString();
        Integer invertedNumber = Integer.valueOf(String.join("", transformNumber));

        return invertedNumber;
    }

    public boolean testPalindrome() {

        Integer sumPalindrome = this.userSeleccion + this.invertedNumber(this.userSeleccion);
        Integer invertedSumPalindrome = this.invertedNumber(sumPalindrome);

        if (sumPalindrome.equals(invertedSumPalindrome)) {
            return true;
        }

        return false;
    }

    public boolean testPalindrome(int number) {

        Integer sumPalindrome = number + this.invertedNumber(number);
        Integer invertedSumPalindrome = this.invertedNumber(sumPalindrome);

        if (sumPalindrome.equals(invertedSumPalindrome)) {
            return true;
        }

        return false;
    }

    public List<Integer> generateNumberPalindrome() {
        List<Integer> result = new ArrayList<>();

        int startedCounter = 10;

        while (true) {
            if (this.testPalindrome(startedCounter)) {
                result.add(startedCounter);
            }

            startedCounter++;

            if (result.size() == this.userSeleccion) {
                break;
            }
        }

        return result;
    }
}
