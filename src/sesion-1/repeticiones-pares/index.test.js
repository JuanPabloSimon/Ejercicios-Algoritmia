import { expect, describe, it } from "vitest";

import filtrarPares from "./repeated-elements";

describe.skip("filtrarPares", () => {
  it("deberia devolver solo los elementos que aparece una cantidad pares de veces", () => {
    expect(filtrarPares([1, 1, 2, 3, 4, 4, 5])).toStrictEqual([1, 4]);
  });
});
