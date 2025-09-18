// unit testing : means you are tetsing only one component or testing in isolation.

import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLable } from "../RestauantCard";
import MOCK_DATA from "../Mocks/resCardMocks.json";
import "@testing-library/jest-dom";

it("should load restaurant card with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Mansarovar Restaurant");
  expect(name).toBeInTheDocument();
});
it("should load promoted restaurant", () => {
    const PromotedRestaurantCard = withPromotedLable(RestaurantCard);
    render(<PromotedRestaurantCard resData={MOCK_DATA}/>);
    const isPromoted = screen.getByText("Promoted");
    expect(isPromoted).toBeInTheDocument();

});