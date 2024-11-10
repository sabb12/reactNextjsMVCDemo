import React from "react";
import TodoItem from "./TodoItem";

export default function DoneList({ todos, onToggle, onDelete }) {
  return (
    <div className="doneContent">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            showUpdate={false}
          />
        ))}
    </div>
  );
}
