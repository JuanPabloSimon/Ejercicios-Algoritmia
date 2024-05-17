export default function filtrarPares(array) {
  // Creamos Map para guardar elementos y la cantidad de veces que aparecen
  const countMap = new Map();

  // filtramos elementos y los agregamos al map
  array.forEach((element) => {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  });
  // creamos variable para guardar los elementos repetidos un número par de veces
  const filteredArray = [];
  array.forEach((element) => {
    if (filteredArray.find((el) => el === element)) return; // si el elemento ya esta agregado, lo ignora y retorna
    if (countMap.get(element) % 2 === 0) {
      // si la cantidad de repeticiones es par lo agrega al array
      filteredArray.push(element);
    }
  });
  return filteredArray;
}
