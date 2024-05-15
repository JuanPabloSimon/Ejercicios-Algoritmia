// type Input = {
//   nombres: string[],
//   edades: number[],
// };

// type Output = {
//   id: string,
//   nombre: string,
//   edad: string,
// };

export default function transformador(input) {
  const { nombres, edades } = input;
  const newFormat = []
  if (nombres.length === edades.length) {
    for (let index = 0; index < nombres.length; index++) {
      newFormat.push({id: index, nombre: nombres[index], edad: edades[index]});
    }
    return newFormat;
  } 
  return "Los datos recibidos no coinciden en cantidad"
}
