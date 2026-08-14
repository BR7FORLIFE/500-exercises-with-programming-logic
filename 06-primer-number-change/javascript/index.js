function getAllPrimeNumbersByRange(start, end) {
  if (end < start) {
    throw new Error("El final del rango debe ser un número mayor al comienzo");
  }

  if (start < 0 || end < 0) {
    throw new Error("El comienzo o el final del rango no debe ser negativo");
  }

  const numbersPrimes = [];

  for (let number = start; number <= end; number++) {
    if (number < 2) {
      continue;
    }

    let isPrime = true;

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      numbersPrimes.push(number);
    }
  }

  return numbersPrimes;
}

console.log(getAllPrimeNumbersByRange(2, 40));
