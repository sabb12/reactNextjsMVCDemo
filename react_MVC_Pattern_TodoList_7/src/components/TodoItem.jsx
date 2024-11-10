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
    <div className="todoContainer" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <div className="todoSection1">
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </div>
      <div className="todoSection2">
        <input
          type="text"
          className="todo"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{
            border: isEditing ? "1px solid #000" : "none",
            backgroundColor: isEditing ? "#fff" : "transparent",
          }}
          disabled={!isEditing}
        />
        {!todo.completed && showUpdate && (
          <button onClick={() => (isEditing ? handleSave() : setIsEditing(true))} className="updateButton">
            {isEditing ? "저장" : "수정"}
          </button>
        )}
        <button onClick={() => onDelete(todo.id)} className="deleteButton">삭제</button>
      </div>
    </div>
  );
}
