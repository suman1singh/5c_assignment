import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [data1, setdata1] = useState();
  function onSubmitHandler(e) {
    e.preventDefault();
    navigate(`/user/${data1}`, { state: { gitname: data1 } });
  }
  return (
    <div className="App">
      <form className="borderSec" onSubmit={onSubmitHandler}>
        <label>Github username:</label>{" "}
        <input
          type="text"
          placeholder="Please enter userName"
          onChange={(e) => setdata1(e.target.value)}
        />{" "}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
