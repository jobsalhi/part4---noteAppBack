const assert = require("node:assert");
const { beforeEach, describe, it } = require("node:test");
describe("Basic math operations", () => {
  beforeEach(() => console.log("about to run some test"));

  describe(" combined ", () => {
    it("should add two numbers correctly", () => {
      const result = 2 + 3;
      assert.strictEqual(result, 5);
    });

    it("should subtract two numbers correctly", () => {
      const result = 7 - 2;
      assert.strictEqual(result, 5);
    });
  });

  it("should multiply two numbers correctly", () => {
    const result = 4 * 5;
    assert.strictEqual(result, 20);
  });

  it("should divide two numbers correctly", () => {
    const result = 10 / 2;
    assert.strictEqual(result, 5);
  });
});
