import { Outlet, createMemoryRouter, RouterProvider } from "react-router";
import { vi, test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("add a product to cart", async () => {
    const addToCart = vi.fn();
    const user = userEvent.setup();
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
            addToCart: addToCart,
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
    const button = screen.getByRole("button", { name: /Add to Cart/i });
    await user.click(button);
    expect(addToCart).toHaveBeenCalledWith(mockProducts[0]);
  });
});
