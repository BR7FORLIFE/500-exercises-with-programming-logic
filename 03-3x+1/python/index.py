from typing import List

number = int(input("Digite un numero: "))

result: List[int] = []

def generateSequencyCollatz(number: int) -> List[int]:
    if number == 1:
        return result

    if number % 2 == 0:
        currentOperation = number // 2
    else:
        currentOperation = number * 3 + 1

    result.append(currentOperation)

    return generateSequencyCollatz(currentOperation)


if __name__ == "__main__":
    generateSequencyCollatz(number)
    print("Pasos: ", result)
    print("Numero de pasos: ", len(result))
    print("Valor maximo de la secuencia: ", max(result))
