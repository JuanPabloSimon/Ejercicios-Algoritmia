export default function transformador(input) {
  // obtenemos las props de la data
  const { nombres, edades } = input;
  const newFormat = [];
  if (nombres.length === edades.length) {
    // si coinciden las cantidades de nombes y edades creamos el nuevo formato
    for (let index = 0; index < nombres.length; index++) {
      newFormat.push({
        // pusheamos con nuevo formato agregando los alores obtenidos previamente
        id: index + 1,
        nombre: nombres[index],
        edad: edades[index],
      });
    }
    return newFormat;
  }
  // si se reciben mas nombres que edades o mas edades que nombres retornamos un error de inconsistencia
  return "Los datos recibidos no coinciden en cantidad";
}
