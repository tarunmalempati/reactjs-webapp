import React, { useState } from "react";

const AddTodo = ({add}) => {
  const [todo, setTodo] = useState("");

  const addEvent = e => {
    e.preventDefault();
    add(todo);
    setTodo("");
  }

  return (
    <form className="form" onSubmit={(e) => addEvent(e)}>
      <input
        className="input"
        type="text"
        name="todo"
        value={todo}
        placeholder="Enter Todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn" type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
