function TodoForm({ setTodos }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const dataForm = new FormData(event.target);
    const title = dataForm.get("name");
    const content = dataForm.get("name");

    if (title === "" || content === "") {
      return alert("제목과 내용을 입력해주세요.");
    }

    const nextTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };

    setTodos((prev) => [nextTodo, ...prev]);
    event.target.reset();
  };

  return (
    <form onChange={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" name="title" />
      <label htmlFor="content">Content</label>
      <input id="content" type="text" name="content" />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
