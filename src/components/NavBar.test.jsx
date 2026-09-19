import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders the SPYLT logo", () => {
    render(<NavBar />);
    expect(screen.getByRole("img", { name: /spylt/i })).toBeInTheDocument();
  });
});
