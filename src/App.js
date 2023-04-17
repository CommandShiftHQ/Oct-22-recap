import React, { useState, useEffect } from "react";
import "./styles/app.css";
import Todo from "./components/Todo";
import InputForm from "./components/InputForm";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("hello");

    return () => {
      console.log("goodbye");
    };
  }, [todos]);

  return (
    <div className="app">
      <InputForm setTodos={setTodos} />
      <div>
        {todos.map((todo) => (
          <Todo key={todo} description={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
