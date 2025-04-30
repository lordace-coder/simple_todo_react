import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import TodoItem from "./TodoItem";

// use state
// use ref

function App() {
  const input = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = (i) => {
    // spread operator

    setTodo([...todo, i]);
  };


  return (
    <div className="font-sans p-5 ">
      <Navbar />
      <div className="todo-container">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-5">
          My To-Do List
        </h1>
        <div className="todo-input flex justify-center mb-5"></div>
        <input
          ref={input}
          type="text"
          placeholder="Add a new task..."
          id="input"
          className="w-3/4 p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => {
            const txt = input.current.value;

            input.current.value = null;
            addTodo({ todo: txt, completed: false });
          }}
          className="ml-3 px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </div>
      {todo && todo.length > 0 ? (
        <ul className="todo-list list-none p-0 max-w-xl mx-auto shadow-md rounded-md overflow-hidden">
          {todo.map((item, i) => (
            <TodoItem key={i} completed={item.completed} item={item.todo} />
          ))}
        </ul>
      ) : (
        <p>No Todo Yet</p>
      )}
    </div>
  );
}

export default App;
