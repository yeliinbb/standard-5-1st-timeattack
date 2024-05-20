import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const initialState = [
    { id: 0, title: "test1", content: "test1", isDone: false },
    { id: 1, title: "test2", content: "test2", isDone: true },
  ];
  const [todos, setTodos] = useState(initialState);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm setTodos={setTodos} />
      <div>
        <TodoList todos={workingTodos} title="Working" setTodos={setTodos} />
        <TodoList todos={doneTodos} title="Done" setTodos={setTodos} />
      </div>
    </>
  );
}
