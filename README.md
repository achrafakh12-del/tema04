# Tarea 4: Calculadora y bucles · DWEC 26/27

* **Alumno:** Achraf Akhmoul
* **Asignatura:** Desarrollo Web en Entornos Cliente (DWEC)
* **Fecha:** Octubre 2026

---

## 1. Descripción del proyecto

Esta página web interactiva ha sido desarrollada para practicar con los operadores del lenguaje JavaScript (`+`, `-`, `*`, `/`, `**`, `%`), las estructuras condicionales (`if`, `else if`, `else` y el operador ternario) y los bucles de repetición (`for`, `while` y `do...while`). La interfaz está completamente maquetada utilizando componentes y la rejilla responsiva de **Bootstrap**.

---

## 2. Evidencias (Capturas de pantalla)

### Captura 1: Vista general de la página
![Vista de la página entera](capturas/pagina-entera.png)
*Página completa adaptada para escritorio con mi nombre visible en la barra de navegación y en el pie de página.*

### Captura 2: Adaptación a dispositivos móviles
![Vista en móvil](capturas/movil.png)
*Vista de la página adaptada a pantalla móvil utilizando la rejilla responsiva (`row` y `col-*`) de Bootstrap comprobada mediante F12.*

### Captura 3: Control de errores (División entre cero)
![Error al dividir entre 0](capturas/error-dividir-cero.png)
*Manejo del caso de error al dividir entre cero. Se muestra la alerta de color rojo en la interfaz y el rastro correspondiente registrado en la consola de desarrollador.*

### Captura 4: Comportamiento de bucles con el número 0
![Bucles con el número 0](capturas/bucles-texto-cero.png)
*Demostración de los bucles de texto ejecutados con el valor 0 en la casilla de entrada y la consola abierta.*

### Captura 5: Generación de insignias (badges)
![Bucles con badges](capturas/bucles-badges.png)
*Generación dinámica de elementos `badge` de Bootstrap alternando colores según si el número de iteración es par o impar.*

---

## 3. Reflexión sobre los bucles

Las estructuras de control `for`, `while` y `do...while` permiten iterar un bloque de código, pero presentan diferencias fundamentales en el momento de evaluar la condición. Los bucles `for` y `while` son de tipo *pre-test*, lo que significa que evalúan la condición antes de ejecutar el bloque interior; si la condición inicial resulta falsa, el código interno no se ejecutará ninguna vez. 

En contraste, el bucle `do...while` es de tipo *post-test*, por lo que la condición se evalúa al final de cada iteración. Esto garantiza que el bloque de código dentro del `do...while` se ejecute obligatoriamente al menos una vez, independientemente de si la condición es verdadera o falsa de entrada. 

Este comportamiento se demuestra al probar los bucles introduciendo el número `0`: mientras que `for` y `while` no realizan ninguna iteración (ya que `1 <= 0` es falso), el bucle `do...while` ejecuta una primera vuelta completa e imprime una repetición antes de evaluar y dar por concluido el bucle.

---

## 4. Fuentes consultadas y Uso de IA

* **MDN Web Docs:** Documentación oficial sobre expresiones, operadores en JavaScript y estructuras de control.
* **Bootstrap 5 Documentation:** Guía de uso de la rejilla (`grid`), tarjetas (`cards`), avisos (`alerts`) y distintivos (`badges`).

