import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let result: number[] = [];
let state = 0;
let currentOperation = 0;

function generateSequencyCollatz(number: number) {
    if (state === 1) {
        return result;
    }

    if (number % 2 === 0) {
        currentOperation = number / 2;
        result.push(currentOperation);
        state = currentOperation;
        generateSequencyCollatz(state);
    } else {
        currentOperation = state * 3 + 1;
        result.push(currentOperation);
        state = currentOperation;
        generateSequencyCollatz(state);
    }
}

rl.question("Digite un numero: ", (answer: string) => {
    if (Number(answer) <= 0) {
        throw new Error("El numero no puede ser 0 ni negativo!");
    }

    generateSequencyCollatz(Number(answer));

    console.log("Pasos: ", result);
    console.log("Numero de pasos: ", result.length);
    console.log(
        "Valor maximo de la secuencia: ",
        result.sort((a, b) => b - a)[0],
    );

    rl.close();
});
