export default function contarLosLenguajes(developers) {
  const lenguajes = {};
  developers.forEach((element) => {
    lenguajes[element.language] = (lenguajes[element.language] || 0) + 1;
  });
  return lenguajes;
}

