export default function posiblePalindromo(num) {
  // si el numero esta entre 0 y 9 retorna true
  if (num >= 0 && num < 10) return true;
  // pasamos a string para poder iterar y comparar, creamos objeto para contar cantidad de apariciones
  const numberString = num.toString();
  const conteoDigitos = {};

  // iteramos sobre cada digito para contar apariciones
  for (let index = 0; index < numberString.length; index++) {
    const digit = numberString[index];
    conteoDigitos[digit] = (conteoDigitos[digit] || 0) + 1;
  }

  // creamos variable para contar cantidad de numero que se repiten una cantidad impar de veces (si son mas de 1 el numero no será un palíndromo)
  var impares = 0;
  // contamos cantidad de apariciones impares
  for (const digito in conteoDigitos) {
    if (
      conteoDigitos.hasOwnProperty(digito) &&
      conteoDigitos[digito] % 2 !== 0
    ) {
      impares++;
    }
  }
  // retornamos, si la cantidad de numeros que tienen apariciones impares es mayor a uno no sera palíndromo (false), si no retorna true;
  return impares <= 1;
}

// console.log(posiblePalindromo(415554));
 