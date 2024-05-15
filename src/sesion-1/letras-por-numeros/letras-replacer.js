export default function letrasPorNumeros(string) {
  const alphabet = Array.from(Array(26), (_, i) => String.fromCharCode(i + 97));

  const letras = string
    .toLowerCase()
    .replace(/[^0-9a-zA-Z]+/g, "")
    .split("");
  const letrasReemplazadas = letras.map((el) => {
    return alphabet.indexOf(el) + 1;
  });
  // TODO: implement
  return letrasReemplazadas;
}
