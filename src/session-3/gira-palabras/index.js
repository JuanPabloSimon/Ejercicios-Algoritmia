export default function girar(texto) {
  const palabras = texto.trim().split(" "); // eliminamos espacio y separamos las palabras
  for (let i = 0; i < palabras.length; i++) {
    // si la palabra es mayor o igual de 5 letras lo transformamos a array
    if (palabras[i].length >= 5) {
      let palabraInvertida = palabras[i].split("").reverse().join(""); // como array usamos el metodo reverse para revertirlo y lo reunimos con join
      palabras.splice(i, 1, palabraInvertida); // reemplazamos el valor dentro del array de palabras
    }
  }
  // pasamos el array a string y retornamos
  return palabras.join(" ");
}
