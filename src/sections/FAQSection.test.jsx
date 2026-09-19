import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FAQSection from "./FAQSection";

describe("FAQSection", () => {
  it("renders every question and opens the first answer by default", () => {
    render(<FAQSection />);
    const firstQuestion = screen.getByRole("button", {
      name: /lactose free/i,
    });
    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
  });

  it("toggles a question closed when clicked again", () => {
    render(<FAQSection />);
    const firstQuestion = screen.getByRole("button", {
      name: /lactose free/i,
    });
    fireEvent.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
  });

  it("opens a different question and closes the previous one (single-open accordion)", () => {
    render(<FAQSection />);
    const firstQuestion = screen.getByRole("button", { name: /lactose free/i });
    const secondQuestion = screen.getByRole("button", {
      name: /protein and caffeine/i,
    });

    fireEvent.click(secondQuestion);

    expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
  });
});
