import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [data, setData1] = useState();
  function onSubmitHandler(e) {
    console.log(data);
    e.preventDefault();
    navigate(`/user/${data}`, { state: { gitname: data } });
  }
  return (
    <div className="App">
      <form className="borderSec" onSubmit={onSubmitHandler}>
        <label>Github username:</label>{" "}
        <input
          type="text"
          placeholder="Please enter userName"
          onChange={(e) => setData1(e.target.value)}
        />{" "}
        <span>Include forks:</span> <input type="checkbox" />{" "}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
