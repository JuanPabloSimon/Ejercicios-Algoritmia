// interface Registro {
//   id: string;
//   voto: string;
//   nombre: string;
// }

export default function unificarVotos(mesas, parametro) {
  const votosUnificados = [];
  mesas.forEach((element) => {
    for (let voto of element) {
      console.log();
      let repeated = votosUnificados.find(
        (el) => el[parametro] === voto[parametro]
      );
      if (repeated === undefined) {
        votosUnificados.push(voto);
      }
    }
  });
  return votosUnificados;
}
