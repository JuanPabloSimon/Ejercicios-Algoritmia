export default function esUnaLetra(caracter) {
  let numero = Number(caracter); // creamos un numero con esl string recibido
  // de haber recibido un numero se creara, si no sera NaN. O si el string vacio retornamos false
  if (numero || caracter.length === 0) {
    return false;
  }
  //de no haberse creado ningun numero retornamos true
  return true;
}
