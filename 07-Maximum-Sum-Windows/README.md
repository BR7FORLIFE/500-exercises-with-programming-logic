# 🧩 Ejercicio: Máxima Suma por Bloques de Tamaño K

## 📜 Enunciado

Dado un arreglo de números enteros y un tamaño de bloque `K`, debes dividir el arreglo en bloques consecutivos de tamaño `K` y encontrar **el bloque cuya suma sea máxima**.

> ⚠️ Importante: los bloques **NO se solapan**. Cada bloque comienza después de terminar el anterior.

---

## 🧪 Ejemplo

Entrada:

```text
Números: [2, 1, 5, 1, 3, 2]
K = 3
```

## Bloques posibles

```text
[2, 1, 5] → 8
[1, 3, 2] → 6
```

## Salida:

Suma máxima: 8 <br>
Bloque: [2, 1, 5] <br>
Índices: [0, 3]

## 🎯 Objetivo

Tu programa debe:

Dividir el arreglo en bloques consecutivos de tamaño K.
Calcular la suma de cada bloque.
Encontrar el bloque con la suma máxima.
Retornar la suma máxima.
Mostrar los elementos del bloque encontrado.
Mostrar el índice inicial y final del bloque.