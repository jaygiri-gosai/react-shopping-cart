import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("render h1 element", () => {
  render(<App />);
  expect(screen.getByText("We are on the App page")).toBeInTheDocument();
});
