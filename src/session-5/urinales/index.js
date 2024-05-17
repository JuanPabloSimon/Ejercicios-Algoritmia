export default function urinalesLibres(urinales) {
  //variales de grupos dispoinbles y luego los que seran utilizables
  let grupos;
  let disponibles = 0;
  // chequeamos que los urinales ocupados cumplan la regla de no tener ninguno al lado ocupado
  let bienOcupados = urinales
    .split("0")
    .filter((group) => group.length > 0)
    .every((el) => el.length === 1);
  console.log(bienOcupados);
  if (!bienOcupados) return -1; // si no estan los urinales bien ocupados (dos 1 juntos) retornamos -1
  // si hay alguno ocupado
  if (urinales.includes("1")) {
    // dividimos en grupos los urinale libres
    grupos = urinales.split("1").filter((group) => group.length > 0);
    // iteramos y aumentamos la cantidad de disponibles considerando la separacion (1)
    for (const grupo of grupos) {
      disponibles += Math.floor((grupo.length - 1) / 2);
    }
  } else {
    // si no hay urinales ocupados la logica será distinta, tendremos que agregarle uno a la cantidad para que el calculo sea exacto
    disponibles += Math.floor((urinales.length + 1) / 2); // no filtramos y derectamente calculamos con el tamaño del string recibido (todos vacíos)
  }
  // retornamos el valor de los urinales disponibles
  return disponibles;
}
