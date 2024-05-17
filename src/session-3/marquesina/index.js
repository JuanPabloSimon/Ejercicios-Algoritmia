/**
 *  Funcion que toma una palabra (String) y retorna un array con las posibles rotaciones de letras dentro de esa palabra
 *  EJ (hola) -->> ['olah', 'laho', 'ahol', 'hola']
 */
export default function marquesina(texto) {
  const words = [];
  for (let i = 0; i < texto.length; i++) {
    let current = words[i - 1] || texto; // si tenemos palabras agregadas current será esa palabra, si no comienza con el texto recibido
    words.push(reverser(current)); // agregamos la palabra con la primer letra enviada al final con funcion auxiliar
  }
  return words;
}

function reverser(text) {
  // cortamos el slice a partir del segundo elemento y le agregamos el primero al final
  return text.slice(1).concat(text.slice(0, 1));
}
