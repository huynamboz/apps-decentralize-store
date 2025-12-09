import React, { useState } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: number;
}

export function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const handleAdd = () => {
    if (titleValue.trim() === "" && contentValue.trim() === "") return;

    const newNote: Note = {
      id: Date.now(),
      title: titleValue.trim() || "Untitled",
      content: contentValue.trim(),
      createdAt: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setTitleValue("");
    setContentValue("");
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };

  const handleStartEdit = (note: Note) => {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const handleSaveEdit = () => {
    if (editingId === null) return;

    setNotes(
      notes.map((note) =>
        note.id === editingId
          ? {
              ...note,
              title: editTitle.trim() || "Untitled",
              content: editContent.trim(),
            }
          : note
      )
    );
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleAdd();
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
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
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            placeholder="Note title..."
            style={{
              padding: "8px 12px",
              fontSize: "16px",
              fontWeight: "500",
              border: "1px solid rgba(17, 24, 39, 0.15)",
              borderRadius: "8px",
              outline: "none",
            }}
          />
          <textarea
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Write your note here... (Cmd/Ctrl + Enter to save)"
            rows={3}
            style={{
              padding: "8px 12px",
              fontSize: "16px",
              border: "1px solid rgba(17, 24, 39, 0.15)",
              borderRadius: "8px",
              outline: "none",
              resize: "vertical",
              fontFamily: "inherit",
            }}
          />
          <button
            onClick={handleAdd}
            disabled={titleValue.trim() === "" && contentValue.trim() === ""}
            style={{
              padding: "8px 16px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#ffffff",
              backgroundColor: "#3b82f6",
              border: "none",
              borderRadius: "8px",
              cursor:
                titleValue.trim() === "" && contentValue.trim() === ""
                  ? "not-allowed"
                  : "pointer",
              opacity:
                titleValue.trim() === "" && contentValue.trim() === "" ? 0.5 : 1,
              transition: "background-color 0.2s",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => {
              if (titleValue.trim() !== "" || contentValue.trim() !== "") {
                e.currentTarget.style.backgroundColor = "#2563eb";
              }
            }}
            onMouseLeave={(e) => {
              if (titleValue.trim() !== "" || contentValue.trim() !== "") {
                e.currentTarget.style.backgroundColor = "#3b82f6";
              }
            }}
          >
            Add Note
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {notes.length === 0 ? (
          <div
            style={{
              padding: "32px",
              textAlign: "center",
              color: "#6b7280",
              fontSize: "16px",
            }}
          >
            No notes yet. Create one above!
          </div>
        ) : (
          <div>
            {notes.map((note) => (
              <div
                key={note.id}
                style={{
                  padding: "16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (editingId !== note.id) {
                    e.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (editingId !== note.id) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                {editingId === note.id ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      style={{
                        padding: "8px 12px",
                        fontSize: "16px",
                        fontWeight: "500",
                        border: "1px solid rgba(17, 24, 39, 0.15)",
                        borderRadius: "8px",
                        outline: "none",
                      }}
                    />
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      rows={4}
                      style={{
                        padding: "8px 12px",
                        fontSize: "16px",
                        border: "1px solid rgba(17, 24, 39, 0.15)",
                        borderRadius: "8px",
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "inherit",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                      }}
                    >
                      <button
                        onClick={handleSaveEdit}
                        style={{
                          padding: "6px 12px",
                          fontSize: "14px",
                          color: "#ffffff",
                          backgroundColor: "#3b82f6",
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#2563eb";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#3b82f6";
                        }}
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        style={{
                          padding: "6px 12px",
                          fontSize: "14px",
                          color: "#6b7280",
                          backgroundColor: "transparent",
                          border: "1px solid rgba(17, 24, 39, 0.15)",
                          borderRadius: "6px",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(31, 41, 55, 0.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: "8px",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#111827",
                            margin: "0 0 4px 0",
                          }}
                        >
                          {note.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#6b7280",
                            margin: "0 0 8px 0",
                          }}
                        >
                          {formatDate(note.createdAt)}
                        </p>
                        {note.content && (
                          <p
                            style={{
                              fontSize: "16px",
                              color: "#111827",
                              margin: "0",
                              whiteSpace: "pre-wrap",
                              wordBreak: "break-word",
                            }}
                          >
                            {note.content}
                          </p>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                        }}
                      >
                        <button
                          onClick={() => handleStartEdit(note)}
                          style={{
                            padding: "6px 12px",
                            fontSize: "14px",
                            color: "#3b82f6",
                            backgroundColor: "transparent",
                            border: "1px solid #3b82f6",
                            borderRadius: "6px",
                            cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#3b82f6";
                            e.currentTarget.style.color = "#ffffff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#3b82f6";
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(note.id)}
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
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

