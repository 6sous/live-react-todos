import React, { useState } from "react";
import TodoForm from "../components/TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([
    { title: "titre", description: "description" },
  ]);

  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos.map((el, index) => (
        <div
          key={index}
          className="todo-card"
          style={{
            border: "1px solid blue",
          }}>
          <h2>{el.title}</h2>
          <p>{el.description}</p>
        </div>
      ))}
    </>
  );
}

export default TodoList;
