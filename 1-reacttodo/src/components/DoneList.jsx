import React from "react";
import TodoItem from "./TodoItem";

export default function DoneList({ todos, onToggle, onDelete }) {
  return (
    <div>
      <h2>Completed Todos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            showUpdate={false}
          />
        ))}
      </ul>
    </div>
  );
}
