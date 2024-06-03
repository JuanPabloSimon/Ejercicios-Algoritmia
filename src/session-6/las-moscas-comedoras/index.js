export default function lasMoscasComedoras(numero) {
  let moscasSanti = 0, // variables de cantidad de moscas por cada rana
    moscasSiri = 0,
    moscasUbi = 0;
  // iteramos para sacar la suma de Santi
  for (let i = 1; i <= numero; i++) {
    moscasSanti += i;
  }
  // iteramos para sacar la suma de Siri usando el total de santi dividido 2 y redondeado hacia abajo
  for (let i = 1; i <= Math.floor(moscasSanti / 2); i++) {
    moscasSiri += i;
  }
  // iteramos para sacar la suma de Ubi usando la suma de los totales de Santi y Siri
  for (let i = 0; i <= moscasSanti + moscasSiri; i++) {
    moscasUbi += i;
  }
  return `Santi se comió ${moscasSanti} moscas, Siri se comió ${moscasSiri} moscas y Ubi se comió ${moscasUbi} moscas`;
}
