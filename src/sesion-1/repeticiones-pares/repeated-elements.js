export default function filtrarPares(array) {
  // Creamos Map para guardar elementos y la cantidad de veces que aparecen
  const countMap = new Map();

  // filtramos elementos y los agregamos al map
  array.forEach((element) => {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  });
  const filteredArray = [];
  array.forEach((element) => {
    if (filteredArray.find((el) => el === element)) return;
    if (countMap.get(element) % 2 === 0) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
}
