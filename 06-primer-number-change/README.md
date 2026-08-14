# 06 - Números Primos en un Rango

## Descripción

Dados dos números enteros que representan el inicio y el final de un rango,
encontrar todos los números primos que se encuentran dentro de ese rango.

Además, determinar cuál es el número primo más grande dentro del rango.

Un número primo es un número mayor que `1` que solamente puede dividirse
exactamente entre `1` y él mismo.

Por ejemplo:

- `2` es primo porque solamente es divisible entre `1` y `2`.
- `7` es primo porque solamente es divisible entre `1` y `7`.
- `9` no es primo porque es divisible entre `1`, `3` y `9`.

---

## Problema

Dados dos números enteros:

- `inicio`: inicio del rango.
- `fin`: final del rango.

El programa debe:

1. Encontrar todos los números primos entre `inicio` y `fin`.
2. Contar cuántos números primos fueron encontrados.
3. Determinar cuál es el número primo más grande dentro del rango.

El rango es **inclusivo**, lo que significa que tanto `inicio` como `fin`
deben ser evaluados.

---

## Entrada

Dos números enteros:

```text
inicio = 10
fin = 30