
import { expect, describe, it } from "vitest";

import encontrarHackers from ".";

describe.skip("encontrarHackers", () => {
  const actual = [
    ["estudiante1", 170, ["B", "A", "A", "C", "A", "A"]],
    ["estudiante2", 120, ["B", "A", "A", "A"]],
    ["estudiante3", 160, ["B", "A", "A", "A", "A"]],
    ["estudiante4", 140, ["B", "A", "A", "C", "A"]],
  ];
  const expected = ["estudiante2", "estudiante4"];

  it("debería encontrar los hackers correctamente correctamente", () =>
    expect(encontrarHackers(actual)).toMatchObject(expected));
});