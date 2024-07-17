import { useState } from "react";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onUpdate,
  showUpdate = true,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        style={{
          border: isEditing ? "1px solid #000" : "none",
          backgroundColor: isEditing ? "#fff" : "transparent",
        }}
        disabled={!isEditing}
      />
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      {!todo.completed && showUpdate && (
        <button onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>
          {isEditing ? "Save" : "Edit"}
        </button>
      )}
    </li>
  );
}
