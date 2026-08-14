function WindowsMaximusSum(arr, k) {
  if (arr.length < k) {
    throw new Error("El numero K debe ser menor a la longitud del array");
  }

  if (arr.length % k !== 0) {
    throw new Error("El tamaño del array debe ser divisible entre el numero K");
  }

  let idx = []; //indices que cumplen con lo requerido
  let sumMax = 0; // auxiliar para sumar los elementos segun K

  //recorremos todo el array

  //arr.length / k -> 2 !en este caso osea recorremos dos partes del array

  // slice(inicio, k * 2) nos garantiza el final del array

  let started = 0;
  for (let i = 1; i < arr.length / k + 1; i++) {
    let partialValue = arr.slice(started, k * i);

    let sumPartialValue = partialValue.reduce(
      (acc, value) => (acc += value),
      0,
    );

    if (sumMax === 0) {
      sumMax = sumPartialValue;
      idx = [started, k * i];
    }

    if (sumPartialValue > sumMax) {
      sumMax = sumPartialValue;
      idx = [started, k * i];
    }

    //aumentamos el iniciador para el siguiente corte (slice)
    started += k;
  }

  return {
    sumaMaxima: sumMax,
    ventana: arr.slice(idx[0], idx[1]),
    indices: idx,
  };
}

//para rangos fijos en el array ej: [1,2,3,4,5,6], k = 2
//entonces [1,2] - [3, 4] - ...
console.log(WindowsMaximusSum([2, 1, 5, 1, 5, 1, 5, 1, 3, 1, 3, 2], 3));

function consecutiveWindowsMaximusSum(numbers, k) {
  if (k <= 0 || k > numbers.length) {
    throw new Error("Invalid window size");
  }

  const initialSum = numbers
    .slice(0, k)
    .reduce((sum, number) => sum + number, 0);

  const result = numbers.slice(k).reduce(
    (acc, number, index) => {
      const realIndex = index + k;

      const newSum = acc.currentSum - numbers[realIndex - k] + number;

      if (newSum > acc.maxSum) {
        return {
          currentSum: newSum,
          maxSum: newSum,
          startIndex: realIndex - k + 1,
        };
      }

      return {
        ...acc,
        currentSum: newSum,
      };
    },
    {
      currentSum: initialSum,
      maxSum: initialSum,
      startIndex: 0,
    },
  );

  return {
    maxSum: result.maxSum,
    window: numbers.slice(result.startIndex, result.startIndex + k),
    startIndex: result.startIndex,
    endIndex: result.startIndex + k - 1,
  };
}
