export default function encontrarAlMasViejo(developers) {
  let mayorActual = 0;
  // iterar sobre los elementos y cambiar la variable siempre que sea mayor que el anterior
  developers.forEach((element) => {
    if (element.age > mayorActual) {
      mayorActual = element.age;
    }
  });
  //filtrar utilizando la variable de mayor edad
  return developers.filter((el) => el.age === mayorActual);
}
