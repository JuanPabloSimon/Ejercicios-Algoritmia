export default function letrasPorNumeros(string) {
  // creamos un Array con los las letras del abecedario
  const alphabet = Array.from(Array(26), (_, i) => String.fromCharCode(i + 97));
  // creamos array con letras del string recibido
  const letras = string
    .toLowerCase() // llevamos a minusculas
    .replace(/[^0-9a-zA-Z]+/g, "") // reemplazamos caracteres especiales y espacios
    .split("");
  // mapeamos y devolvemos la posicion de cada letra en el abecedario, sumando uno a su index
  const letrasReemplazadas = letras.map((el) => {
    return alphabet.indexOf(el) + 1;
  });
  return letrasReemplazadas.join(" "); // retornamos como string
}
