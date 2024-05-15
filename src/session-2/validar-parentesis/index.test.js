import { expect, describe, it } from "vitest";

import {validarParéntesis} from ".";

describe.skip("validarParentesis", () => {
  it("debería devolver true para casos validos", () => {
    expect(validarParéntesis("()")).toBe(true);
    expect(validarParéntesis("(())((()())())")).toBe(true);
  });

  it("debería devolver false para casos invalidos", () => {
    expect(validarParéntesis(")(()))")).toBe(false);
    expect(validarParéntesis("(")).toBe(false);
  });
});