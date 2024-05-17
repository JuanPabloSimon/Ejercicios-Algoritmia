/**
 * Funcion que retorna el usuario que ha modificado su califiaciones
 */
export default function encontrarHackers(estudiantes) {
  const hackers = [];
  estudiantes.forEach((element) => {
    let puntaje = 0; // variable para contabilizar puntaje
    let notasBuenas = 0; // variable para contabilizar la cantidad de notas que son B o A
    // iteramos sobre las notas de cada estudiante
    for (let index = 0; index < element[2].length; index++) {
      // switch para realizar conteo, si la nota es A o B también incrementa la variable de buenas notas
      switch (element[2][index]) {
        case "A":
          notasBuenas++;
          puntaje += VALORES.A;
          break;
        case "B":
          notasBuenas++;
          puntaje += VALORES.B;
          break;
        case "C":
          puntaje += VALORES.C;
          break;
        case "D":
          puntaje += VALORES.D;
          break;
        default:
          break;
      }
    }
    if (notasBuenas >= 5) puntaje += 20; // si las notas buenas son 5 o mas se agregan los 20 de puntaje
    // comparamos si el puntaje obtenido no es igual al que figura en el registro agregamos el estudiante a los hackers
    if (puntaje !== element[1] || puntaje > 200) {
      hackers.push(element[0]);
    }
  });
  return hackers;
}

const VALORES = {
  A: 30,
  B: 20,
  C: 10,
  D: 5,
};
