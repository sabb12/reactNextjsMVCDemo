import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAddTodo({
        id: Date.now(),
        text: newTodo,
        completed: false,
      });
      setNewTodo("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="inputContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What are your tasks for today?"
          />
        <button type="submit" id="addBtn">추가하기</button>
      </form>
    </div>
  );
}
