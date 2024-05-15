export default function encontrarHackers(estudiantes) {
  const hackers = [];

  estudiantes.forEach((element) => {
    let puntaje = 0;
    let notasBuenas = 0;
    for (let index = 0; index < element[2].length; index++) {
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
    if (notasBuenas >= 5) puntaje += 20;
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