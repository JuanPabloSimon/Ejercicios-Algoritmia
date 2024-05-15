export default function moverCeros(array) {
    let ceros = []
    let newArray = [...array]
    for (let element of array) {
        if (element === 0) {
            newArray.splice(newArray.indexOf(0), 1)
            ceros.push(0)
        }
    }
    newArray.push(...ceros)
  return newArray;
}

// console.log(moverCeros([false, 0, 0, 0, 1, 0, 1, 0, 2, 1, 3, "a"]));
