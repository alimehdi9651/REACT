const { render, screen } = require("@testing-library/react");
// import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("conteact page render testing", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // })
  // afterEach(() => {
  //   console.log("Before Each");
  // })
  // afterAll(() => {
  //   console.log("Before Each");
  // })
  //   // we can test or it both are same thing
  it("contact page render or not", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
  });
  //if we have to find multiple items then we have to use getAllByRole()
  it("input render or not ", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    console.log(input);
    expect(input.length).toBe(2);
  });
});
