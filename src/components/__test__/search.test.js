import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../Mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load body with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", {name:"Search"});
  const searchInp = screen.getByTestId("searchInput");
  fireEvent.change(searchInp, {target : {value: "cafe"}});
  fireEvent.click(searchBtn);
  const card = screen.getAllByTestId("resCard");
  expect(card.length).toBe(4)


});


it("should load top rated restauants after button click", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    )
  );

  const topRatedButton = screen.getByRole("button", {name: "Top rated Restaurant"})
  const beforeClicked = screen.getAllByTestId("resCard");
  fireEvent.click(topRatedButton);
  const afterClick = screen.getAllByTestId("resCard");
  expect(afterClick.length).toBe(20);
  
});
