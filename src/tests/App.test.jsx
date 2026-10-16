import { Outlet, createMemoryRouter, RouterProvider } from "react-router";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Home/Hero";

test("render h1 element", () => {
  function TestLayout() {
    return <Outlet />;
  }
  const router = createMemoryRouter([
    {
      path: "/",
      element: <TestLayout />,
      children: [
        {
          index: true,
          element: <Hero />,
        },
      ],
    },
  ]);
  render(<RouterProvider router={router} />);
  expect(screen.getByText("Simple, made beautiful.")).toBeInTheDocument();
});
