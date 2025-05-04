import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  function addTodo() {
    setTodos([...todos, text]);
    setText("");
  }

  function removeTodo(indexToRemove) {
    const newTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(newTodos);
    if (editingIndex === indexToRemove) {
      cancelEditing();
    }
  }

  function startEditing(index) {
    setEditingIndex(index);
    setEditingText(todos[index]);
  }

  function cancelEditing() {
    setEditingIndex(null);
    setEditingText("");
  }

  function saveEdit(index) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? editingText : todo
    );
    setTodos(updatedTodos);
    cancelEditing();
  }

  function onSubmit(event) {
    event.preventDefault();
    if (text.trim() !== "") addTodo();
  }

  return (
    <main className="w-full min-h-screen">
      <form
        className="flex flex-row gap-2 justify-center p-5"
        onSubmit={onSubmit}
      >
        <input
          name="todo"
          type="text"
          className="p-2 rounded text-black w-full max-w-screen-sm"
          placeholder="enter a task"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
        <button className="bg-white text-black px-3 rounded" type="submit">
          +Add
        </button>
      </form>

      <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1">
        {todos.length === 0 && (
          <p className="text-white/50">You have no pending tasks</p>
        )}
        {todos.map((todo, index) => (
          <div
            key={`todo-${index}`}
            className="bg-white/10 rounded p-4 flex flex-row justify-between items-center gap-2"
          >
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="p-2 rounded text-black flex-grow"
                  autoFocus
                />
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => saveEdit(index)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                  onClick={cancelEditing}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="flex-grow">{todo}</span>
                <div className="flex gap-2">
                  <span
                    className="text-yellow-400 cursor-pointer hover:bg-yellow-500 hover:text-white rounded-full p-1 w-6 h-6 flex items-center justify-center"
                    onClick={() => startEditing(index)}
                  >
                    ✎
                  </span>
                  <span
                    className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 w-6 h-6 flex items-center justify-center"
                    onClick={() => removeTodo(index)}
                  >
                    x
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
