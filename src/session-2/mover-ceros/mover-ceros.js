/**
 *  Funcion que retorna el mismo array de numeros pero mutando y enviando todos los 0 al final
 */
export default function moverCeros(array) {
  let ceros = [];
  let newArray = [...array];
  for (let element of array) {
    if (element === 0) {
      // si encontramos un 0 lo eliminamos del array nuevo y agregamos el cero al array de ceros
      newArray.splice(newArray.indexOf(0), 1);
      ceros.push(0);
    }
  }
  newArray.push(...ceros); // agregamos todos los ceros al final
  return newArray;
}
