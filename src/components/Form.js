import React, { useState } from "react";

function Form() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setMessage("Name is required");
    } else {
      setMessage("Form submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Submit</button>

      <p>{message}</p>

    </form>
  );
}

export default Form;