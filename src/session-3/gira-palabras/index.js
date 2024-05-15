export default function girar(texto) {
  const palabras = texto.trim().split(" ");
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length >= 5) {
      let palabraInvertida = palabras[i].split("").reverse().join("");
      palabras.splice(i, 1, palabraInvertida);
    }
  }
  return palabras.join(" ");
}

