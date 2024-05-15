const CONTINENTES = ["Africa", "Asia", "Europe", "Oceania", "Americas"];

export function continentesRepresentados(array) {
  const continents = array.map((el) => el.continent);
  for (let element of CONTINENTES) {
    console.log(element);
    if (!continents.includes(element)) return false;
  }
  return true;
}

export function developersEuropeos(array) {
  let devs = array.filter(
    (element) =>
      element.continent === "Europe" && element.language === "JavaScript"
  );
  return devs;
}

export function developersGreet(array) {
  const newArray = [];
  array.map((el) => {
    newArray.push({
      ...el,
      greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`,
    });
  });
  return newArray;
}

export function lenguajesPresentes(array) {
  let leng = [];
  array.forEach((el) => {
      if (!leng.includes(el.language)) leng.push(el.language) 
  });
  return leng;
}

// console.log(
//   lenguajesPresentes([
//     {
//       firstName: "Fatima",
//       lastName: "A.",
//       country: "Algeria",
//       continent: "Europe",
//       age: 25,
//       language: "JavaScript",
//     },
//     {
//       firstName: "Laia",
//       lastName: "P.",
//       country: "Andorra",
//       continent: "Europe",
//       age: 55,
//       language: "JavaScript",
//     },
//     {
//       firstName: "Laia",
//       lastName: "P.",
//       country: "Andorra",
//       continent: "Europe",
//       age: 55,
//       language: "Ruby",
//     },
//     {
//       firstName: "Oliver",
//       lastName: "Q.",
//       country: "Australia",
//       continent: "Oceania",
//       age: 65,
//       language: "PHP",
//     },
//   ])
// );
