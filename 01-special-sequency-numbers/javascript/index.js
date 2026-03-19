import readline from "node:readline";

function calculateSpecialNumbers(number) {
  if (number < 3) {
    throw new Error("No se aceptan numero iguales o menores que 3!");
  }

  let total = 0;
  let result = [];

  let index = 1;
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

    if (result.length == number) {
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
  "Digite la longitud del array de caracteres especiales: ",
  (answer) => {
    const { result, total } = calculateSpecialNumbers(answer);

    console.log("list: ", result);
    console.log("total: ", total);

    rl.close();
  },
);
