import { Outlet, createMemoryRouter, RouterProvider } from "react-router";
import { vi, test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../components/Cart/Cart";

describe("Cart Page", () => {
  test("render cart page", () => {
    const mockProducts = [
      {
        id: 1,
        title: "Test Product",
        price: 29.99,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        qty: 2,
      },
    ];
    function TestLayout() {
      return (
        <Outlet
          context={{
            addToCart: vi.fn(),
            cart: mockProducts,
            updateQty: vi.fn(),
            removeCartItem: vi.fn(),
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
            element: <Cart />,
          },
        ],
      },
    ]);
    render(<RouterProvider router={router} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  test("update quantity", async () => {
    const user = userEvent.setup();
    const addToCart = vi.fn();
    const updateQty = vi.fn();
    const mockProducts = [
      {
        id: 1,
        title: "Test Product",
        price: 29.99,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        qty: 2,
      },
    ];
    function TestLayout() {
      return (
        <Outlet
          context={{
            addToCart: addToCart,
            cart: mockProducts,
            updateQty: updateQty,
            removeCartItem: vi.fn(),
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
            element: <Cart />,
          },
        ],
      },
    ]);
    render(<RouterProvider router={router} />);
    const increase = screen.getByRole("button", { name: /\+/i });
    await user.click(increase);
    expect(addToCart).toHaveBeenCalledWith(mockProducts[0]);

    const decrease = screen.getByRole("button", { name: /-/i });
    await user.click(decrease);
    expect(updateQty).toHaveBeenCalledWith(mockProducts[0]);
  });
});
