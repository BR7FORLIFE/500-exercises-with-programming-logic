import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class NumberPalindrome {
    #userInput: number;

    constructor(userInput: number) {
        this.#userInput = userInput;
    }

    invertedNumber(number: number) {
        const invertedNumber = String(number).split("").reverse().join("");
        return Number(invertedNumber);
    }

    testPalindrome() {
        let sumPalindrome =
            this.#userInput + this.invertedNumber(this.#userInput);
        let invertedSumPalindrome = this.invertedNumber(sumPalindrome);

        if (sumPalindrome === invertedSumPalindrome) {
            return true;
        }
        return false;
    }

    testPalindromeRecursive(userSelecccion: number) {
        let sumPalindrome =
            userSelecccion + this.invertedNumber(userSelecccion);
        let invertedSumPalindrome = this.invertedNumber(sumPalindrome);

        if (sumPalindrome === invertedSumPalindrome) {
            return true;
        }
        return false;
    }

    generatePalindrome() {
        let result = [];

        let startedCounter = 10;

        while (true) {
            if (this.testPalindromeRecursive(startedCounter)) {
                result.push(startedCounter);
            }

            startedCounter++;

            if (result.length === this.#userInput) {
                break;
            }
        }

        return result;
    }
}

rl.question(
    "Digite un numero para comprobar y generar numeros espejos: ",
    (answer: string) => {
        const result = new NumberPalindrome(Number(answer));

        console.log("Es palindromo?: ", result.testPalindrome());
        console.log(
            "Lista de numeros generados: ",
            result.generatePalindrome(),
        );

        rl.close();
    },
);
