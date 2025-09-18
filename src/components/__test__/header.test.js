import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";

import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const login = screen.getByRole("button");

  // const login = screen.getByText("Login");
  // if you have to find a specific button
  const login = screen.getByRole("button", { name: "Login" });
  expect(login).toBeInTheDocument();
});

it("should load header component with cart item with 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText("Cart - (0 items)");
  
  expect(cartItem).toBeInTheDocument();
});
it("should load header component with cart irrespective of how many items are their", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});
it("should load header component with logout button after clicking login", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name : "Login"})
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", {name : "Logout"})


  expect(logoutButton).toBeInTheDocument();
});
