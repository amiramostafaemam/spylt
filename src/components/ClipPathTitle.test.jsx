import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ClipPathTitle from "./ClipPathTitle";

describe("ClipPathTitle", () => {
  it("renders the given title text", () => {
    render(
      <ClipPathTitle
        title="Lactose free"
        color="#000"
        bg="#fff"
        className="fourth-title"
        borderColor="#111"
      />
    );
    expect(
      screen.getByRole("heading", { name: "Lactose free" })
    ).toBeInTheDocument();
  });
});
