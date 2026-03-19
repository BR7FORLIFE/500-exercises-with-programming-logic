import readline from "readline";

type Props = {
    result: number[];
    total: number;
};

function generateSpecialNumbers(number: number): Props {
    if (number <= 3) {
        throw new Error("El numero no puede ser 3 o menor que el!");
    }

    let result: number[] = [];
    let total = 0;

    let index = 0;
    let oldState = 0;

    while (true) {
        if (index % 2 === 0 || index % 3 === 0) {
            index++;
            continue;
        }

        result.push(index);
        oldState = index;

        if (index > 1) {
            if ((index + oldState) % 2 != 0) {
                result.push(index);
                oldState = index;
            }
        }

        if (result.length === number) {
            break;
        }

        index++;
    }

    for (let i = 0; i < result.length; i++) {
        total += result[i];
    }

    return { result, total };
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(
    "Digite la cantidad de elementos a devolver de numeros especiales: ",
    (answer: string) => {
        const { result, total } = generateSpecialNumbers(Number(answer));

        console.log("Result: ", result);
        console.log("total: ", total);

        rl.close();
    },
);
