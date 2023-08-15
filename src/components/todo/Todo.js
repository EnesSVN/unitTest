import { useState } from "react";
import TodoList from "./TodoList";

const defaultItems = [
  { text: "Learn React", done: false },
  { text: "Learn JS", done: true },
  { text: "Learn HTML", done: false },
];

const Todo = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const DeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const EditItem = (index) => {
    const newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        gap: "10px",
      }}
    >
      <input
        placeholder="Add a new todo here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => setItems((prev) => [...prev, { text, done: false }])}
      >
        Add
      </button>
      <TodoList
        data={items}
        deleteOn={(index) => DeleteItem(index)}
        edit={(index) => EditItem(index)}
      />
    </div>
  );
};

export default Todo;
