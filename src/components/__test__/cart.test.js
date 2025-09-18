
// EXAMLE OF INTEGRATION TESTING


import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../Mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart"
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restauratn menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const acordianHeader = screen.getByText("Paneer Main Course(16)");
  fireEvent.click(acordianHeader);

  expect(screen.getAllByTestId("foodItem").length).toBe(16);
  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[0]);
  
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItem").length).toBe(18);//16 from menu page and 2 from cart page.

  const clearCart = screen.getByRole("button", {name : "Clear Cart"})
  fireEvent.click(clearCart);
  expect(screen.getAllByTestId("foodItem").length).toBe(16);
});
