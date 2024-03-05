// import './App.css'
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] bg-cyan-300 mx-10 my-5 rounded-xl p-5">
        <div className="addTodo my-5">
          <span className="p-2 font-bold">Add a Todo</span>
          <input
            type="text"
            value={todo}
            onChange={handleChange}
            className="w-[50%] p-1 rounded-md text-green-800 font-mono font-bold"
          />
          {}
          <button
            className="bg-violet-400 rounded-md p-1 text-white"
            onClick={handleAdd}
          >
            Submit
          </button>
        </div>
        <h1 className="font-bold ">Your Todos</h1>
        <div className="todos my-2">
          {todos.map((item) => {
            return (
              <div key={todo} className="todo flex w-1/4 justify-between">
                <div className={item.isCompleted ? "" : "line-through"}>
                  {item.todo}
                </div>
                <div className="buttons mx-2">
                  <button
                    className="bg-violet-400 rounded-md p-1 text-white"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-violet-400 rounded-md p-1 text-white m-1"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
