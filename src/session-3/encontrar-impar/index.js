export default function encontrarImpar(numeros) {
  const count = new Map();
  if (numeros.length === 0) return "Parámetros vacíos";
  numeros.forEach((element) => {
    count.set(element, (count.get(element) || 0) + 1);
  });

  let notEvenNum;
  count.forEach((key, el) => {
    if (key % 2 !== 0 || key === 1) {
      notEvenNum = el;
    }
  });
  return notEvenNum != null ? notEvenNum :  'No hay repeticiones impares';
}

