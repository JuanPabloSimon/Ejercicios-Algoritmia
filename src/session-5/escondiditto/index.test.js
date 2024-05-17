import { expect, describe, it } from "vitest";

import encontraditto from ".";

describe.skip("encontraditto", () => {
  it("Debe devolver el indice del elemento que esta repetido en el anterior y siguiente => 5", () =>
    expect(
      encontraditto([
        "abra",
        "pikachu",
        "psyduck",
        "psyduck",
        "blastoise",
        "blastoise",
        "blastoise",
        "charmander",
      ])
    ).toBe(5));

  it("['pikachu', 'pikachu', 'pikachu', 'psyduck', 'blastoise'] => 1", () =>
    expect(
      encontraditto(["pikachu", "pikachu", "pikachu", "psyduck", "blastoise"])
    ).toBe(1));
});
