import { expect, describe, it } from "vitest";

import {
  continentesRepresentados,
  developersEuropeos,
  developersGreet,
  lenguajesPresentes,
} from "./index";

describe.skip("lenguajesPresentes", () => {
  it("debería retornar una lista con los lenguajes de programacion presentes, sin repetir", () => {
    expect(
      lenguajesPresentes([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Europe",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "JavaScript",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "Ruby",
        },
        {
          firstName: "Oliver",
          lastName: "Q.",
          country: "Australia",
          continent: "Oceania",
          age: 65,
          language: "PHP",
        },
      ])
    ).toEqual(['JavaScript', 'Ruby', 'PHP' ]);
  });
});

describe.skip("developersGreet", () => {
  it("debería retornar la misma lista que recibe con una nueva propiedad en cada elemento llamada greeting", () => {
    expect(
      developersGreet([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Europe",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "JavaScript",
        },
      ])
    ).toEqual([
      {
        firstName: "Fatima",
        lastName: "A.",
        country: "Algeria",
        continent: "Europe",
        age: 25,
        language: "JavaScript",
        greeting: "Hi Fatima, what do you like the most about JavaScript?",
      },
      {
        firstName: "Laia",
        lastName: "P.",
        country: "Andorra",
        continent: "Europe",
        age: 55,
        language: "JavaScript",
        greeting: "Hi Laia, what do you like the most about JavaScript?",
      },
    ]);
  });
});

describe.skip("developersEuropeos", () => {
  it("deberia devolver una lista con los JavaScript Devs provenientes de Europa", () => {
    expect(
      developersEuropeos([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Europe",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Agustín",
          lastName: "M.",
          country: "Chile",
          continent: "Americas",
          age: 37,
          language: "C",
        },
        {
          firstName: "Jing",
          lastName: "X.",
          country: "China",
          continent: "Asia",
          age: 39,
          language: "Ruby",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "JavaScript",
        },
        {
          firstName: "Oliver",
          lastName: "Q.",
          country: "Australia",
          continent: "Oceania",
          age: 65,
          language: "PHP",
        },
      ])
    )
      .toEqual([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Europe",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "JavaScript",
        },
      ])
      .toHaveLength(2);
  });
});

describe.skip("continentesRepresentados", () => {
  it("debería devolver true si todos los continentes están representados", () => {
    expect(
      continentesRepresentados([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Agustín",
          lastName: "M.",
          country: "Chile",
          continent: "Americas",
          age: 37,
          language: "C",
        },
        {
          firstName: "Jing",
          lastName: "X.",
          country: "China",
          continent: "Asia",
          age: 39,
          language: "Ruby",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "Ruby",
        },
        {
          firstName: "Oliver",
          lastName: "Q.",
          country: "Australia",
          continent: "Oceania",
          age: 65,
          language: "PHP",
        },
      ])
    ).toBe(true);
  });

  it("debería devolver false si todos los continentes no están representados", () => {
    expect(
      continentesRepresentados([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
      ])
    ).toBe(false);
  });
});
