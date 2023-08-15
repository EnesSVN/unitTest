import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

// it("")  it should do something

describe("Counter Test", () => {
  let count;
  let increaseBtn;
  let decreaseBtn;
  beforeEach(() => {
    render(<Counter />);
    count = screen.getByText("0");
    expect(count).toBeInTheDocument();
    increaseBtn = screen.getByText("increment");
    expect(increaseBtn).toBeInTheDocument();
    decreaseBtn = screen.getByText("decrement");
    expect(decreaseBtn).toBeInTheDocument();
  });
  beforeAll(() => {
    console.log(" works just once");
  });

  afterEach(() => {
    console.log("works after each test");
  });
  afterAll(() => {
    console.log("works after all tests");
  });

  test("increase btn", () => {
    fireEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    fireEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
