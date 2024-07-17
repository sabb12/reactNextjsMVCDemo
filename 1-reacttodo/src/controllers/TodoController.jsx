import { useState, useEffect } from "react";
import { TodoModel } from "../models/TodoModel";
import TodoView from "../views/TodoView";

export default function TodoController() {
  const [todos, setTodos] = useState([]);
  const todoModel = new TodoModel();

  useEffect(() => {
    setTodos(todoModel.getTodos());
  }, []);

  const handleAddTodo = (todo) => {
    todoModel.addTodo(todo);
    setTodos(todoModel.getTodos());
  };

  const handleToggleTodo = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.completed = !updatedTodo.completed;
    todoModel.updateTodo(id, updatedTodo);
    setTodos(todoModel.getTodos());
  };

  const handleDeleteTodo = (id) => {
    todoModel.deleteTodo(id);
    setTodos(todoModel.getTodos());
  };

  const handleUpdateTodo = (id, newText) => {
    const updatedTodo = {
      ...todos.find((todo) => todo.id === id),
      text: newText,
    };
    todoModel.updateTodo(id, updatedTodo);
    setTodos(todoModel.getTodos());
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <TodoView
      activeTodos={activeTodos}
      completedTodos={completedTodos}
      onAddTodo={handleAddTodo}
      onToggleTodo={handleToggleTodo}
      onDeleteTodo={handleDeleteTodo}
      onUpdateTodo={handleUpdateTodo}
    />
  );
}
