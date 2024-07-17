import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo({
      id: Date.now(),
      text: newTodo,
      completed: false,
    });
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="오늘 할 일 추가 하세요!"
      />
      <button type="submit">추가</button>
    </form>
  );
}
