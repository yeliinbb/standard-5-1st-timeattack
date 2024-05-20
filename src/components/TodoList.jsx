import TodoItem from "./TodoItem";

export default function TodoList({ title, todos, setTodos }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => {
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
        })}
      </ul>
    </section>
  );
}
