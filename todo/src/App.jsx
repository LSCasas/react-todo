import { useState } from "react";

export default function App() {
  // Lista de todos
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    setTodos([...todos, text]);
  }

  function removeTodo(indexToRemove) {
    const newTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(newTodos);
  }

  function onSubmit(event) {
    event.preventDefault();
    addTodo();
    setText("");
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
          placeholder="ingresa una tarea"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
        <button className="bg-white text-black px-3 rounded" type="submit">
          +Agregar
        </button>
      </form>
      
      <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1">
        {todos.length === 0 && (
          <p className="text-white/50">No tienes tareas pendientes</p>
        )}
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <div
              key={`todo-${index}`}
              className="bg-white/10 rounded p-4 flex flex-row justify-between"
            >
              <span className="select-none">{todo}</span>
              <span
                className="text-red-500 cursor-pointer hover:bg-red-500
                hover:text-white rounded-full p-1 size-5 text-center items-center" 
                onClick={() => removeTodo(index)}
              >
                x
              </span>
            </div>
          ))}
      </div>
    </main>
  );
}


