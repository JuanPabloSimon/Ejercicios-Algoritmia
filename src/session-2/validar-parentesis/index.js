export function validarParéntesis(parentesis) {
  const checker = [];
  // iteramos sobre los carácteres
  for (let index = 0; index < parentesis.length; index++) {
    const character = parentesis[index];
    // si son de apertura  los agrega al array checker
    if (character === "(") {
      checker.push(character);
    }
    // si es de cierre, chequea que el checker no este vacio (no habria parentesis de apertura por tanto estaria mal)
    // chequea que el ultimo no sea de apertura y lo saca (si no es devuelve false) si es de apertura sigue el bucle con el elemento eliminado
    else if (character === ")") {
      if (checker.length === 0 || checker.pop() !== "(") {
        return false;
      }
    }
    console.log(checker);
  }
  // al final, si el checker esta vacio es por que todos los elementos cerraron correctamente
  return checker.length === 0;
}

// Otra opción observada en internet
function esOrdenValidoParentesis(cadena) {
  let contador = 0;
  // Recorremos la cadena de entrada
  for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena[i];

    // Si es un paréntesis de apertura, aumentamos el contador
    if (caracter === "(") {
      contador++;
    }
    // Si es un paréntesis de cierre, disminuimos el contador
    else if (caracter === ")") {
      contador--;
    }

    // Si el contador se vuelve negativo, significa que hay más paréntesis de cierre que de apertura
    if (contador < 0) {
      return false;
    }
  }

  // Al final, si el contador es igual a 0, significa que todos los paréntesis se cerraron correctamente
  return contador === 0;
}
