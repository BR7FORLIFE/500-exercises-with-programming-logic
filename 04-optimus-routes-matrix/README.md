# 🧩 Ejercicio 4: Ruta Óptima en una Matriz

## 📜 Enunciado

Tienes una matriz de tamaño `N x M` llena de números enteros positivos.  
Empiezas en la esquina superior izquierda `(0,0)` y tu objetivo es llegar a la esquina inferior derecha `(N-1, M-1)`.

### 🔹 Reglas de movimiento:

Solo puedes moverte:
- A la derecha ➡️
- Hacia abajo ⬇️

---

## 🎯 Objetivo

1. Encontrar la ruta que tenga la **suma mínima posible**.
2. Mostrar:
   - La suma mínima
   - La ruta tomada (coordenadas o valores)

---

## 🧪 Ejemplo

Entrada:

[
[1, 3, 1],
[1, 5, 1],
[4, 2, 1]
]

Salida:

Ruta: (0,0) → (1,0) → (2,0) → (2,1) → (2,2)
Suma mínima: 1 + 1 + 4 + 2 + 1 = 9


---

## 🔥 Desafíos adicionales

- Permitir matrices grandes (ej: 100x100)
- Mostrar múltiples rutas si tienen el mismo costo mínimo
- Optimizar el uso de memoria

---

## ⚠️ Restricciones por Lenguaje

Aquí es donde se pone interesante 👇

---

### 🐍 Python
- ❌ No puedes usar matrices auxiliares (DP clásico prohibido)
- ✅ Usa recursión + backtracking
- 💡 Tip: tendrás que explorar caminos (puede ser costoso)

---

### ☕ Java
- ❌ No usar recursión
- ✅ Usa programación dinámica (DP) con matriz
- 💡 Tip: solución clásica bottom-up

---

### ⚡ JavaScript
- ❌ No usar arrays multidimensionales directamente
- ✅ Representa la matriz como una lista plana
- 💡 Tip: indexación manual (`i * columnas + j`)

---

### 🟦 TypeScript
- ❌ No usar `number[][]`
- ✅ Define tipos personalizados (ej: `type Matrix = Array<number>`)
- ✅ Crea funciones tipadas para acceso seguro
- 💡 Tip: abstrae el acceso a la matriz

---

## 🧠 Habilidades que trabajas

- Programación dinámica
- Backtracking
- Optimización de rutas
- Representación de datos
- Pensamiento espacial

---

## 💡 Bonus (nivel pro)

- Permitir movimientos diagonales
- Convertirlo en un problema con obstáculos (`-1` = bloqueado)
- Resolverlo usando BFS o Dijkstra

---

## 🚀 Motivación

Este tipo de problema aparece muchísimo en:

- Entrevistas técnicas 💼
- Juegos 🎮
- IA básica 🤖
- Optimización de rutas 🚗

La clave no es solo resolverlo…  
sino **resolverlo diferente en cada lenguaje** 🔥
