import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class NumberPalindrome {
  #number = 0;
  constructor(number) {
    this.#number = number;
  }

  invertedNumber(number) {
    const invertedNumber = Number(String(number).split("").reverse().join(""));
    return invertedNumber;
  }

  testPalindrome() {
    let sumPalindrome = this.#number + this.invertedNumber(this.#number);
    let invertedSumPalindrome = this.invertedNumber(sumPalindrome);

    if (sumPalindrome === invertedSumPalindrome) {
      return true;
    }

    return false;
  }

  testPalindromeRecursive(userSeleccion) {
    let sumPalindrome = userSeleccion + this.invertedNumber(userSeleccion);
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

      if (result.length === this.#number) {
        break;
      }
    }

    return result;
  }
}

rl.question(
  "Digite un numero para comprobar y generar numeros palindromos: ",
  (answer) => {
    const result = new NumberPalindrome(Number(answer));
    console.log("Comprobar si es palindromo: ", result.testPalindrome());
    console.log("Lista de numeros generados: ", result.generatePalindrome());

    rl.close();
  },
);
