import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import DoneList from "../components/DoneList";

export default function TodoView({
  activeTodos,
  completedTodos,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
  onUpdateTodo,
}) {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList
        todos={activeTodos}
        onToggle={onToggleTodo}
        onDelete={onDeleteTodo}
        onUpdate={onUpdateTodo}
      />
      <DoneList
        todos={completedTodos}
        onToggle={onToggleTodo}
        onDelete={onDeleteTodo}
      />
    </div>
  );
}
