import { beforeEach, describe, expect, it } from "@jest/globals";
import { handleLevelSelection, selectedLevel } from "./index";

describe("handleLevelSelection", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input type="radio" class="level" name="level" value="1" checked>
      <input type="radio" class="level" name="level" value="2">
      <input type="radio" class="level" name="level" value="3">
    `;
  });

  it("should set the selectedLevel variable based on the checked radio button", () => {
    handleLevelSelection();

    expect(selectedLevel).toBe(1);
  });
});
