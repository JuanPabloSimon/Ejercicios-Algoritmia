/*
 * Funcion que retorna la cantidad (número entero) de letras que aparecen mas de una vez en un string
 */
export default function contarDuplicados(texto) {
  const count = new Map();
  // iteramos sobre los elementos del string formateados a lowerCase;
  for (const char of texto.toLowerCase()) {
    count.set(char, (count.get(char) || 0) + 1); //agregamos a count o aumentamos el valor si ya esta agregado
  }
  const repeated = [];
  count.forEach((el) => {
    if (el > 1) repeated.push(el); // agregamos al array de repetidos aquellos cuya aparicion es mayor a 1
  });
  return repeated.length; // retornamos el largo del array
}
