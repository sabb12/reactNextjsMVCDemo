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
    <div className="container">
      <TodoForm onAddTodo={onAddTodo} />
      <div className="todoListContainer">
        <div className="todoList">
          <div className="todoTitle">TO DO LIST</div>
          <TodoList
            todos={activeTodos}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
            onUpdate={onUpdateTodo}
          />
        </div>
        <div className="doneList">
          <div className="doneTitle">DONE LIST</div>
          <DoneList
            todos={completedTodos}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        </div>
      </div>
    </div>
  );
}
