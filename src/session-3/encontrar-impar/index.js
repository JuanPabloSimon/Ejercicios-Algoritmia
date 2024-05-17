export default function encontrarImpar(numeros) {
  const count = new Map();
  if (numeros.length === 0) return "Parámetros vacíos"; // chequeamos que no vengan los parametros vacíos
  numeros.forEach((element) => {
    // agregamos cada elemento al Map con su cantidad de apariciones
    count.set(element, (count.get(element) || 0) + 1);
  });

  let oddNum;
  count.forEach((key, el) => {
    // iteramos y chequeamos si es un numero impar o 1
    if (key % 2 !== 0 || key === 1) {
      oddNum = el;
    }
  });
  // al final, de haber un numero con repeticiones impar, lo devolvemos.
  return oddNum != null ? oddNum : "No hay repeticiones impares";
}
