/*
  Tarea 4 · DWEC · Achraf Akhmoul
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Achraf Akhmoul - Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Achraf Akhmoul - Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Achraf Akhmoul - Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Achraf Akhmoul - Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Achraf Akhmoul - Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Achraf Akhmoul - Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Achraf Akhmoul - Dividir: falta algún número");
  } else if (n2 === 0) {
    mostrar("Error: No se puede dividir entre 0.", "danger");
    console.warn("Achraf Akhmoul - Dividir: división entre 0");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Achraf Akhmoul - Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Achraf Akhmoul - Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Achraf Akhmoul - Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Achraf Akhmoul - Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("Error: No se puede calcular el módulo entre 0.", "danger");
    console.warn("Achraf Akhmoul - Módulo: módulo entre 0");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Achraf Akhmoul - Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números para comparar.", "danger");
    console.warn("Achraf Akhmoul - ¿Cuál es mayor?: falta algún número");
  } else if (n1 > n2) {
    mostrar(`El número 1 (${n1}) es mayor que el número 2 (${n2}).`);
    console.log(`Achraf Akhmoul - ¿Cuál es mayor?: ${n1} es mayor que ${n2}`);
  } else if (n2 > n1) {
    mostrar(`El número 2 (${n2}) es mayor que el número 1 (${n1}).`);
    console.log(`Achraf Akhmoul - ¿Cuál es mayor?: ${n2} es mayor que ${n1}`);
  } else {
    mostrar(`Los dos números son iguales (${n1}).`);
    console.log(`Achraf Akhmoul - ¿Cuál es mayor?: ${n1} y ${n2} son iguales`);
  }
}

function parOImpar() {
  const n1 = leerNumero("numero1");

  if (Number.isNaN(n1)) {
    mostrar("Escribe el número 1 para comprobar si es par o impar.", "danger");
    console.warn("Achraf Akhmoul - Par o impar: falta el número 1");
  } else if (!Number.isInteger(n1)) {
    mostrar(`El número ${n1} tiene decimales: no es ni par ni impar.`, "warning");
    console.warn(`Achraf Akhmoul - Par o impar: ${n1} tiene decimales`);
  } else {
    const tipo = (n1 % 2 === 0) ? "par" : "impar";
    mostrar(`El número ${n1} es ${tipo}.`);
    console.log(`Achraf Akhmoul - Par o impar: ${n1} es ${tipo}`);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número 1 debe ser un entero y como máximo 20.", "danger");
    console.warn("Achraf Akhmoul - Bucle for: número inválido o superior al máximo");
    return;
  }

  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    contador++;
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Achraf Akhmoul - Bucle for terminado. Total: ${textoTotal}`);
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número 1 debe ser un entero y como máximo 20.", "danger");
    console.warn("Achraf Akhmoul - Bucle while: número inválido o superior al máximo");
    return;
  }

  let contador = 0;
  let i = 1;
  while (i <= veces) {
    anadirLinea(`while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Achraf Akhmoul - Bucle while terminado. Total: ${textoTotal}`);
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número 1 debe ser un entero y como máximo 20.", "danger");
    console.warn("Achraf Akhmoul - Bucle do...while: número inválido o superior al máximo");
    return;
  }

  let contador = 0;
  let i = 1;
  
  // El do...while se ejecuta obligatoriamente al menos una vez aunque «veces» sea 0 o negativo,
  // porque la condición (i <= veces) se evalúa al final del bloque.
  do {
    anadirLinea(`do...while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  } while (i <= veces);

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Achraf Akhmoul - Bucle do...while terminado. Total: ${textoTotal}`);
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número 1 debe ser un entero y como máximo 20.", "danger");
    console.warn("Achraf Akhmoul - Badges for: número inválido o superior al máximo");
    return;
  }

  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    const colorBadge = (i % 2 === 0) ? "primary" : "secondary";
    anadirBadge(i, colorBadge);
    contador++;
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Achraf Akhmoul - Badges for terminados. Total: ${textoTotal}`);
}

function badgesWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número 1 debe ser un entero y como máximo 20.", "danger");
    console.warn("Achraf Akhmoul - Badges while: número inválido o superior al máximo");
    return;
  }

  let contador = 0;
  let i = 1;
  while (i <= veces) {
    const colorBadge = (i % 2 === 0) ? "primary" : "secondary";
    anadirBadge(i, colorBadge);
    contador++;
    i++;
  }

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Achraf Akhmoul - Badges while terminados. Total: ${textoTotal}`);
}

function badgesDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número 1 debe ser un entero y como máximo 20.", "danger");
    console.warn("Achraf Akhmoul - Badges do...while: número inválido o superior al máximo");
    return;
  }

  let contador = 0;
  let i = 1;
  do {
    const colorBadge = (i % 2 === 0) ? "primary" : "secondary";
    anadirBadge(i, colorBadge);
    contador++;
    i++;
  } while (i <= veces);

  const textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
  console.log(`Achraf Akhmoul - Badges do...while terminados. Total: ${textoTotal}`);
}