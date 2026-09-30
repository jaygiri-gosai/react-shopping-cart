import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Home/Hero";

test("render h1 element", () => {
  render(<Hero />);
  expect(screen.getByText("Simple, made beautiful.")).toBeInTheDocument();
});
