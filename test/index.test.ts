import assert from "node:assert";
import { describe, it } from "node:test";
import mimeType from "../src/index.js";

describe("Get Mime Type Test", () => {
  const out = { type: "text/html", typeOf: "text" };
  it("Witn dot", async (t) => {
    await t.test("", () => {
      const result = mimeType(".html");
      assert.deepEqual(result, out);
    });
  });
  it("Without dot", async (t) => {
    await t.test("", () => {
      const result = mimeType("html");
      assert.deepEqual(result, out);
    });
  });
});
