import React, { useEffect, useRef, useState } from "react";

function TodoForm({ setTodos, todos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClickAddItem = () => {
    setTodos([...todos, { title: title, description: description }]);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form>
      <label htmlFor="title">
        Title
        <input
          ref={inputRef}
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleClickAddItem}>
        Ajouter
      </button>
    </form>
  );
}

export default TodoForm;
