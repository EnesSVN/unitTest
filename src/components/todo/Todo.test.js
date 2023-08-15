import { fireEvent, render, screen, within } from "@testing-library/react";
import Todo from "./Todo";
import TodoList from "./TodoList";

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

  const mockData = [
    { text: "Task 1", done: false },
    { text: "Task 2", done: true },
    { text: "Task 3", done: false },
  ];
  //   test("renders todo items correctly", () => {
  //     render(<TodoList data={mockData} />);
  //     const todoItems = screen.getAllByRole("listitem");

  //     mockData.forEach((item, index) => {
  //       const taskElement = todoItems[index];
  //       expect(taskElement).toHaveTextContent(item.text);
  //       expect(taskElement).toHaveClass(item.done ? "done" : "");
  //     });
  //   });
  // });

  test("calls delete function when delete button is clicked", () => {
    const deleteMock = jest.fn();
    render(<TodoList data={mockData} deleteOn={deleteMock} />);

    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[1]);
    expect(deleteMock).toHaveBeenCalledWith(1);
  });

  //   test("calls edit function when edit button is clicked", () => {
  //     const editMock = jest.fn();
  //     render(<TodoList data={mockData} edit={editMock} />);

  //     const editButtons = screen.getAllByText("Edit");
  //     fireEvent.click(editButtons[2]);

  //     expect(editMock).toHaveBeenCalledWith(2);
  //   });
});
