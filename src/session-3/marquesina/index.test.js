import { describe, it, assert } from "vitest";

import marquesina from ".";

describe.skip("marquesina", () => {
  it("debería armar la maquesina", () => {
    assert.deepEqual(marquesina("Hola"), ["olaH", "laHo", "aHol", "Hola"]);
    assert.deepEqual(marquesina("Hello"), ["elloH", "lloHe", "loHel", "oHell", "Hello"]);
    assert.deepEqual(marquesina("Crack"), [ 'rackC', 'ackCr', 'ckCra', 'kCrac', 'Crack' ])
  });
});