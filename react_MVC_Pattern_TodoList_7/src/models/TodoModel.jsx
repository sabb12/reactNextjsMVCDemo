export class TodoModel {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
    this._commit();
  }

  updateTodo(id, updatedTodo) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? updatedTodo : todo
    );
    this._commit();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this._commit();
  }

  _commit() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
