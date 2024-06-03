export default function quejaJusta(frase) {
  const caracteres = frase.split("");
  const count = new Map();
  caracteres.forEach((element) => {
    count.set(element, (count.get(element) || 0) + 1);
  });
  const repsPrimerCaract = count.get(caracteres[0]);
  return caracteres.every((el) => count.get(el) === repsPrimerCaract);
}

console.log(quejaJusta("ababcc"));
