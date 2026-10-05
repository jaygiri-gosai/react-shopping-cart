import { Outlet, createMemoryRouter, RouterProvider } from "react-router";

import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../components/Shop/Shop";

describe("Shop Page", () => {
  test("render loading", () => {
    function TestLayout() {
      return (
        <Outlet
          context={{
            products: [],
            loading: true,
            error: null,
          }}
        />
      );
    }
    const router = createMemoryRouter([
      {
        path: "/",
        element: <TestLayout />,
        children: [
          {
            index: true,
            element: <Shop />,
          },
        ],
      },
    ]);
    render(<RouterProvider router={router} />);
    expect(screen.getByText("Loading......")).toBeInTheDocument();
  });

  test("rendering error", () => {
    function TestLayout() {
      return (
        <Outlet
          context={{
            products: [],
            loading: false,
            error: new Error("Unable to load products."),
          }}
        />
      );
    }
    const router = createMemoryRouter([
      {
        path: "/",
        element: <TestLayout />,
        children: [
          {
            index: true,
            element: <Shop />,
          },
        ],
      },
    ]);

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Unable to load products.")).toBeInTheDocument();
  });

  test("render products", () => {
    const mockProducts = [
      {
        id: 1,
        title: "Test Product",
        price: 29.99,
        image: "test-image.jpg",
      },
    ];

    function TestLayout() {
      return (
        <Outlet
          context={{
            products: mockProducts,
            loading: false,
            error: null,
          }}
        />
      );
    }

    const router = createMemoryRouter([
      {
        path: "/",
        element: <TestLayout />,
        children: [
          {
            index: true,
            element: <Shop />,
          },
        ],
      },
    ]);

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();

    expect(screen.getByText("$ 29.99")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Add to Cart/i }),
    ).toBeInTheDocument();
  });
});
