import { fireEvent, render, screen, within } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
  let input;
  let button;

  beforeEach(() => {
    render(<Todo />);
    input = screen.getByPlaceholderText("Add a new todo here...");
    button = screen.getByText("Add");
  });

  test("should render input element", () => {
    fireEvent.change(input, { target: { value: "Go Grocery Shopping" } });
    fireEvent.click(button);
    const todoListItem = screen.getByText("Go Grocery Shopping");
    expect(todoListItem).toBeInTheDocument();
  });

  test("delete item from list", () => {
    fireEvent.change(input, { target: { value: "Go Grocery Shopping" } });
    fireEvent.click(button);
    const todoListItem = screen.getByText("Go Grocery Shopping");
    expect(todoListItem).toBeInTheDocument();
    //select the delete button in todoListItem
    const deleteButton = within(todoListItem).getByText("Delete");
    fireEvent.click(deleteButton);
    expect(todoListItem).not.toBeInTheDocument();
  });
  test("edit item from list", () => {
    fireEvent.change(input, { target: { value: "Go Grocery Shopping" } });
    fireEvent.click(button);
    const todoListItem = screen.getByText("Go Grocery Shopping");
    expect(todoListItem).toBeInTheDocument();
    const editButton = within(todoListItem).getByText("Edit");
    fireEvent.click(editButton);
    const isDone = within(todoListItem).getByText("Done");
    expect(isDone).toBeInTheDocument();
  });
});
