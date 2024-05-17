const CONTINENTES = ["Africa", "Asia", "Europe", "Oceania", "Americas"];

/**
 * Primera Funcion
 * Retorna true si existe al menos un developer de cada continente
 */
export function continentesRepresentados(array) {
  const continents = array.map((el) => el.continent); // creamos array con continentes
  for (let element of CONTINENTES) {
    if (!continents.includes(element)) return false; // si al menos uno de los continentes (Constante creada) no esta presente en los continentes creados dentro del metodo (origen de los devs), retorna false
  }
  return true; // si no se activa el if retornará true porque comple con todos los continentes
}

/**
 * Segunda funcion
 * Retorna los desarrolladores de JavaScript que son europeos.
 */
export function developersEuropeos(array) {
  // filtra por continente y lenguaje de programación (busca devs javascript europeos)
  return array.filter(
    (element) =>
      element.continent === "Europe" && element.language === "JavaScript"
  );
}

/**
 * Tercer Funcion
 * Retorna el mismo array pero agregando una propiedad mas a cada desarrollador
 */
export function developersGreet(array) {
  return array.map((el) => {
    return {
      ...el, // spread operator para agregar las propiedades ya existentes
      greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`, // Agregamos greeting a cada elemento
    };
  });
}
/**
 * Cuarta Funcion
 * Retorna un array con los lenguajes de programación de los devs, sin repetir
 */
export function lenguajesPresentes(array) {
  let leng = [];
  array.forEach((el) => {
    if (!leng.includes(el.language)) leng.push(el.language); // si esta incluido no lo agregamos
  });
  return leng;
}
