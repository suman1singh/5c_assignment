import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";

export default function EditUser() {
  const [user, setUser] = useState("Xyz Singh");
  const navigateTo = useNavigate();
  return (
    <div>
      <div className="user-details">
        <img
          className="User-Img"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          alt="User-img"
        />
        <p>Current User: {user}</p>
        <input
          placeholder="Edit user name"
          className="input-box"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <button className="save-button">save</button>
        <button
          style={{ marginLeft: "60px", marginTop: "70px" }}
          onClick={() => navigateTo("/")}
        >
          Go back
        </button>
      </div>
    </div>
  );
}
