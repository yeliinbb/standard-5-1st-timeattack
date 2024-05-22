export default function TodoItem({ todo, setTodos }) {
  const { id, title, content, isDone } = todo;

  const deleteBtn = () => {
    setTodos((prev) => {
      return prev.filter((todo) => id !== todo.id);
    });
  };

  const toggleBtn = () => {
    setTodos((prev) => {
      return prev.map((todo) =>
        id === todo.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    });
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <button onClick={deleteBtn}>Delete</button>
        <button onClick={toggleBtn}>{isDone ? "Cancel" : "Complete"}</button>
      </div>
    </li>
  );
}
