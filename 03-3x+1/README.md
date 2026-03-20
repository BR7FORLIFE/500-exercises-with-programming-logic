# 🧩 Ejercicio 3: Secuencia de Transformación Mínima

## 📜 Enunciado

Dado un número entero positivo `X`, puedes aplicar las siguientes operaciones:

1. Si es par → dividirlo entre 2  
2. Si es impar → multiplicarlo por 3 y sumarle 1  

Tu objetivo es:

- Transformar `X` hasta llegar al número `1`
- Contar cuántos pasos toma
- Mostrar toda la secuencia generada

---

## 🎯 Objetivo

Dado un número `X`, el programa debe:

1. Mostrar la secuencia completa hasta llegar a `1`
2. Indicar el número total de pasos
3. Identificar el valor máximo alcanzado en la secuencia

---

## 🧪 Ejemplo

Entrada: X = 6

Salida:
Secuencia: 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
Pasos: 8
Máximo: 16


---

## 🔥 Desafío adicional

- Encuentra, para todos los números entre `1` y `N`, cuál genera:
  - Más pasos
  - El valor máximo más alto

---

## ⚠️ Restricciones por Lenguaje (IMPORTANTE)

La idea es que **NO repitas la misma solución**, debes cambiar el enfoque en cada lenguaje:

### 🐍 Python
- ❌ No usar bucles `for`
- ✅ Usa recursión obligatoriamente
- 💡 Tip: piensa en funciones que se llaman a sí mismas

---

### ☕ Java
- ❌ No usar recursión
- ✅ Usa estructuras iterativas (`while` o `for`)
- 💡 Tip: controla bien el estado y variables

---

### ⚡ JavaScript
- ❌ No usar `while`
- ✅ Usa funciones de orden superior (`map`, `reduce`, etc.) o recursión
- 💡 Tip: intenta hacerlo funcional

---

### 🟦 TypeScript
- ❌ No usar tipos `any`
- ✅ Define tipos estrictos para la función y resultados
- 💡 Tip: modela la respuesta como un objeto con tipos claros

---

## 🧠 Habilidades que trabajas

- Pensamiento algorítmico
- Recursividad vs iteración
- Control de flujo
- Optimización mental (no solo código)
- Adaptación entre lenguajes

---

## 💡 Bonus (nivel pro)

- Memoriza resultados (memoization) para evitar recalcular secuencias
- Encuentra patrones interesantes en los números grandes

---

## 🚀 Motivación

Este problema es famoso (relacionado con la conjetura de Collatz) y es perfecto para entrenar tu lógica.

La clave aquí no es solo resolverlo…  
sino **resolverlo de formas diferentes en cada lenguaje** 🧠🔥
