const TodoList = ({ data, deleteOn, edit }) => {
  return (
    <ul role="list">
      {data.map((item, index) => (
        <li key={index} role="listitem">
          {item.text}
          <div>{item.done ? <span>Done</span> : <span>Not Done</span>}</div>
          <button onClick={() => deleteOn(index)}>Delete</button>
          <button onClick={() => edit(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
