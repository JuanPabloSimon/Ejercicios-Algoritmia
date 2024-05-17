export default function ordenarEmociones(emociones, orden) {
  const valoresEmociones = emociones.map((el) => {
    return VALORES[el];
  }); // agregamos las emociones a una variable como un array que contiene su valor y la emocion
  let emocionesOrdenadas;
  //el parametro del orden decide si sera descendende o ascendente, utilizamos el valor numerico asignado a cada emoción
  if (orden) {
    emocionesOrdenadas = valoresEmociones.sort((a, b) => a[0] - b[0]);
  } else {
    emocionesOrdenadas = valoresEmociones.sort((a, b) => b[0] - a[0]);
  }
  // retornamos las emociones ordenadas
  return emocionesOrdenadas.map((el) => el[1]);
}

const VALORES = {
  ":D": [1, ":D"],
  ":)": [2, ":)"],
  ":|": [3, ":|"],
  ":(": [4, ":("],
  T_T: [5, "T_T"],
};
