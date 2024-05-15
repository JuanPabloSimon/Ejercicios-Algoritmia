export default function buscarAislado(numeros) {
  const count = {
    even: 0,
    odd: 0,
  };
  numeros.forEach((element) => {
    if (element % 2 === 0) {
      count.even++;
    } else {
      count.odd++;
    }
  });
  if (count.even > count.odd) {
    return numeros.find((el) => el % 2 !== 0);
  }
  return numeros.find((el) => el % 2 === 0);
}

