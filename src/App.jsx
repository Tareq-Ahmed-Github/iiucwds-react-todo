import { useState } from "react";
import "./App.css";

function App() {
  const randomId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const [todoList, setTodoList] = useState([]);
  const todoObjects = () => {
    message &&
      setTodoList([
        ...todoList,
        { id: randomId(), message: message, isCompleted: false },
      ]);
    setMessage("");
  };
  const deleteTodo = (id) => {
    const newList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newList);
  };
  console.log(todoList);
  return (
    <>
      <div className="w-3/4 m-4 p-4 mx-auto flex flex-col gap-2 items-center bg-slate-300 rounded">
        <img src="assets/completed_tasks.svg" alt="todo" className="h-48"/>
        <h1 className="text-2xl font-semibold text-gray-700 font-sans">Osthir Todo Pro</h1>
        <input
          className="border rounded py-1 px-2 outline-none border-1 border-gray-400"
          type="text"
          onChange={handleChange}
          value={message}
        />
        <button
          className="px-3 py-2 bg-gray-800 rounded text-white font-sans"
          onClick={todoObjects}
        >
          Add
        </button>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {todoList &&
            todoList.map((todo) => {
              return (
                <div
                  className=" border border-gray-400 rounded p-4 m-4 text-center w-52"
                  key={todo.id}
                >
                  <p className="text-2xl font-semibold text-gray-900 mb-2">
                    {todo.message}
                  </p>
                  <button
                    className="px-2 py-1 bg-gray-800 text-red-500 rounded my-1"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
