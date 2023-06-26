const { beforeEach, describe, expect, it } = require("@jest/globals");
const { openCard } = require("./index")
 
describe("openCard", () => {
  
  it("should set card src attribute to the corresponding image based on its dataset value", () => {

    let openedCards: string[] = [];
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = "card1";

    openCard(card);

 
    expect(card.getAttribute("src")).toContain(`../../../static/img/${card.dataset.value}.png`);
    expect(openedCards).toHaveLength(1);
    expect(openedCards[0]).toBe(card);
  });
});

