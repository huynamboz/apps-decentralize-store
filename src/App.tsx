import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        borderRadius: "0 0 1rem 1rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid rgba(17, 24, 39, 0.15)",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            style={{
              flex: 1,
              padding: "8px 12px",
              fontSize: "16px",
              border: "1px solid rgba(17, 24, 39, 0.15)",
              borderRadius: "8px",
              outline: "none",
            }}
          />
          <button
            onClick={handleAdd}
            disabled={inputValue.trim() === ""}
            style={{
              padding: "8px 16px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#ffffff",
              backgroundColor: "#3b82f6",
              border: "none",
              borderRadius: "8px",
              cursor: inputValue.trim() === "" ? "not-allowed" : "pointer",
              opacity: inputValue.trim() === "" ? 0.5 : 1,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              if (inputValue.trim() !== "") {
                e.currentTarget.style.backgroundColor = "#2563eb";
              }
            }}
            onMouseLeave={(e) => {
              if (inputValue.trim() !== "") {
                e.currentTarget.style.backgroundColor = "#3b82f6";
              }
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Todo List */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {todos.length === 0 ? (
          <div
            style={{
              padding: "32px",
              textAlign: "center",
              color: "#6b7280",
              fontSize: "16px",
            }}
          >
            No tasks yet. Add one above!
          </div>
        ) : (
          <div>
            {todos.map((todo) => (
              <div
                key={todo.id}
                style={{
                  padding: "16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "background-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                />
                <span
                  style={{
                    flex: 1,
                    fontSize: "16px",
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#9ca3af" : "#111827",
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => handleDelete(todo.id)}
                  style={{
                    padding: "6px 12px",
                    fontSize: "14px",
                    color: "#ef4444",
                    backgroundColor: "transparent",
                    border: "1px solid #ef4444",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ef4444";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#ef4444";
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

