export default function pedirDetalles(developers) {
  const developersFiltrados = [];
  // iteramos con map para realizar logica interna
  developers.map((el) => {
    let propNull; // creamos una propiedad que nos ayudara a saber si hay algun valor null
    // iteramos sobre las propiedades de cada objeto
    for (const prop in el) {
      if (el[prop] === null) {
        propNull = prop; // si alguna de las propiedades es null, se la asignamos a la variable propNull
      }
    }
    // si propNull contiene algun valor (alguno es null), pushea el elemento con la prop question si no, no agregamos nada
    if (propNull) {
      developersFiltrados.push({
        ...el,
        question: `Hi, could you please provide your ${propNull}.`,
      });
    }
  });
  // retornamos arreglo solo con los que presentaron alguna prop null, con la prop agregada.
  return developersFiltrados;
}
