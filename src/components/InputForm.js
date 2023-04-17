import React, { useState } from "react";

const InputForm = ({ setTodos }) => {
  const [value, setValue] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    setTodos((prev) => [...prev, value]);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          onChange={(event) => setValue(event.target.value)}
          value={value}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
