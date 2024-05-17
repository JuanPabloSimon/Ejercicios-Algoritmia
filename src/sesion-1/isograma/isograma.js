export default function esIsograma(string) {
  // si el string tiene mas de una palabra retorna false
  if (string.split(" ").length > 1) return false;
  // descomponemos en letras individuales u llevar a lowercase
  const letras = string.toLowerCase().split("");
  // creamos un map para guardar elementos y apariciones
  const countMap = new Map();
  // agregamos letras y cantidad de apariciones
  letras.forEach((element) => {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  });
  // retornamos si la cantidad de apariciones de todas las letras es 1 --> true
  // si solo una letra aparece mas de una vez --> false
  return letras.every((el) => countMap.get(el) === 1);
}
