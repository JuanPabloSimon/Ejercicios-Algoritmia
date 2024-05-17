import { expect, describe, it } from "vitest";

import unificarVotos from ".";

describe.skip("unificarVotos", () => {
  it("deberia unificar todos los arrays de votos en uno sin repetir los votos. Unificando por id", () =>
    expect(
      unificarVotos(
        [
          [
            { id: "123456", nombre: "Gaspar", voto: "Bingo" },
            { id: "234123", nombre: "Clelia", voto: "Sudoku" },
          ],
          [{ id: "123456", nombre: "Gaspar", voto: "Bingo" }],
          [{ id: "643723", nombre: "Pedro", voto: "Sudoku" }],
        ],
        "id"
      )
    ).toMatchObject([
      { id: "123456", nombre: "Gaspar", voto: "Bingo" },
      { id: "234123", nombre: "Clelia", voto: "Sudoku" },
      { id: "643723", nombre: "Pedro", voto: "Sudoku" },
    ]));

  it("deberia unificar todos los arrays de votos en uno sin repetir los votos. Unificando por nombre", () =>
    expect(
      unificarVotos(
        [
          [
            { id: "123456", nombre: "Gaspar", voto: "Bingo" },
            { id: "234123", nombre: "Clelia", voto: "Sudoku" },
          ],
          [{ id: "123456", nombre: "Gaspar", voto: "Bingo" }],
          [{ id: "643723", nombre: "Pedro", voto: "Sudoku" }],
        ],
        "nombre"
      )
    ).toMatchObject([
      { id: "123456", nombre: "Gaspar", voto: "Bingo" },
      { id: "234123", nombre: "Clelia", voto: "Sudoku" },
      { id: "643723", nombre: "Pedro", voto: "Sudoku" },
    ]));
});
