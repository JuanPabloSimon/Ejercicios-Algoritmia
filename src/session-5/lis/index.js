export default function encontrarLIS(numeros) {
  // si la cantiadad de numeros es 0, retornamos
  if (numeros.length === 0) return 0;
  // creamos un array con el tamaño del array recibido y le asignamos a todos los valores 1
  const dp = new Array(numeros.length).fill(1);
  let maxans = 1; // variable a retornar el tamaño de la lis mas grande

  // iteramos sobre los numeros empezando por el segundo indice
  for (let i = 1; i < dp.length; i++) {
    let maxval = 0;
    //iteramos internamente los numeros previos a numeros[i]
    for (let j = 0; j < i; j++) {
      // si el numero en i (por ej numero[2] = 5) es mayor que en j ( numero[1]= 3) cambiamos el valor de maxVal por el mayor valor entre su previo estado y el valor en dp[j], en este caso seria igual a 1
      if (numeros[i] > numeros[j]) {
        maxval = Math.max(maxval, dp[j]);
      }
    }
    dp[i] = maxval + 1; // aumentamos en uno el valor de maxVal ( en el ejemplo anterior seria 2)
    maxans = Math.max(maxans, dp[i]); // cambiamos el valor de maxans por el maximo entre su estado previo y el valor en dp[i]
  }
  // retornamos maxans con la longitud de la lis mas larga
  return maxans;
}

console.log(encontrarLIS([4, 3, 5, 1, 6]));
