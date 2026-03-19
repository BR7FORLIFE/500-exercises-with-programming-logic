# 🧩 Ejercicio 2: Patrón de Números “Espejo”

## 📜 Enunciado

Un **número espejo** se define así:

1. Toma un número entero positivo `X`.
2. Invierte sus dígitos para formar otro número `Y`.
3. La suma de `X + Y` debe ser un **número palíndromo** (es decir, que se lee igual de izquierda a derecha y de derecha a izquierda).

Por ejemplo:

- `X = 56` → invertido `Y = 65` → `X + Y = 121` (palíndromo ✅)  
- `X = 123` → invertido `Y = 321` → `X + Y = 444` (palíndromo ✅)  

### Objetivo

1. Escribe un programa que reciba un número `N` y encuentre los primeros `N` números espejo positivos.  
2. Imprime cada número `X`, su espejo `Y` y la suma palíndromo `X + Y`.  

### Ejemplo

Entrada: N = 5
Salida:
X = 1, Y = 1, Suma = 2
X = 2, Y = 2, Suma = 4
X = 3, Y = 3, Suma = 6
X = 11, Y = 11, Suma = 22
X = 12, Y = 21, Suma = 33