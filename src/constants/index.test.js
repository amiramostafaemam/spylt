import { describe, expect, it } from "vitest";
import { cards, flavorlists, nutrientLists } from "./index";

describe("flavorlists", () => {
  it("has 6 flavors, each with a name and color", () => {
    expect(flavorlists).toHaveLength(6);
    flavorlists.forEach((flavor) => {
      expect(flavor.name).toBeTruthy();
      expect(flavor.color).toBeTruthy();
    });
  });

  it("does not contain the 'Stawberry' typo", () => {
    const names = flavorlists.map((f) => f.name);
    expect(names).toContain("Strawberry Milk");
    expect(names.join(" ")).not.toMatch(/Stawberry/i);
  });
});

describe("nutrientLists", () => {
  it("has a label and amount for every nutrient", () => {
    expect(nutrientLists.length).toBeGreaterThan(0);
    nutrientLists.forEach((nutrient) => {
      expect(nutrient.label).toBeTruthy();
      expect(nutrient.amount).toBeTruthy();
    });
  });
});

describe("cards", () => {
  it("has 7 testimonials, each with a video source and a name", () => {
    expect(cards).toHaveLength(7);
    cards.forEach((card) => {
      expect(card.src).toMatch(/\.mp4$/);
      expect(card.name).toBeTruthy();
    });
  });
});
