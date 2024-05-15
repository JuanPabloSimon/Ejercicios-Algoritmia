export default function ordenarEmociones(emociones, orden) {
  const valoresEmociones = emociones.map((el) => {
    return VALORES[el];
  });
  let emocionesOrdenadas;
  if (orden) {
    emocionesOrdenadas = valoresEmociones.sort((a, b) => a[0] - b[0]);
  } else {
    emocionesOrdenadas = valoresEmociones.sort((a, b) => b[0] - a[0]);
  }

  return emocionesOrdenadas.map((el) => el[1]);
}

const VALORES = {
  ":D": [1, ":D"],
  ":)": [2, ":)"],
  ":|": [3, ":|"],
  ":(": [4, ":("],
  "T_T": [5, "T_T"],
};

