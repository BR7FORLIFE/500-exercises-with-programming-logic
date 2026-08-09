/**
Monedas: [1, 3, 4]  
Valor: 6  

Salida:
Monedas usadas: [3, 3]
 
 */

function optimusChange(arr, target) {
  let acc = 0;

  //casos a evaluar

  //sumar el primer elemento con el siguiente => target | devolver [ pos1, pos2 ]
  // caso de que no se puede sumar con siguiente usar el mas adelante, y asi sucesivamente
  // sino es ninguno establecemos el valor a la siguiente posicion del array y realizamos el mismo proceso

  //recorremos linealmente el array
  for (let i = 0; i < arr.length; i++) {
    //recorremos en reversa el array
    for (let j = arr.length - 1; j >= 0; j--) {
      acc = arr[i] + arr[j];

      if (acc === target) {
        return { message: "Objetivo logrado", moneys: [arr[i], arr[j]] };
      }

      acc = 0;
    }
  }
}

console.log(optimusChange([1, 3, 4], 11) ?? "No se encontraron monedas");
