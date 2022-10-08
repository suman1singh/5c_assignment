import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./User.css";

export default function App63() {
  const [data, setData] = useState();
  const loc = useLocation();
  var gitId = loc.state.gitname;
  const navigateTo = useNavigate();

  useEffect(() => {
    axios.get(`https://api.github.com/users/${gitId}/repos`).then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <div>
      <button
        style={{ marginLeft: "30px", marginTop: "30px", marginBottom: "30px" }}
        onClick={() => navigateTo("/")}
      >
        Go back
      </button>
      <button
        style={{ float:'right', marginTop:'30px', marginRight:'20px' }}
        onClick={() => navigateTo("/edituser")}
      >
        Current User
      </button>
      {data &&
        data.map((val, i) => (
          <div key={i}>
            <span>
              <img
                className="head-Img"
                src={val.owner.avatar_url}
                alt="heading-img"
              />
            </span>
            <div style={{ width: "90%", margin: "auto", marginTop: "-25px" }}>
              <a>
                <button className="repo-link">{val.description}</button>
              </a>
              <span>
                <img
                  style={{ height: "20px", width: "20px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"
                  alt="repo-tick"
                />
              </span>
              <p>{val.full_name}</p>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
}
