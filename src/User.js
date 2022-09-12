import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function App63() {
  const [data, setData] = useState();
  const loc = useLocation();
  var gitId = loc.state.gitname;

  useEffect(() => {
    console.log("Avail data", gitId);
    axios.get(`https://api.github.com/users/${gitId}/repos`).then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <div>
      <table border="1">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Language</td>
            <td>Description</td>
            <td>Size</td>
          </tr>
          {data &&
            data.map((key, ind) => (
              <tr>
                <td>{key.name}</td>
                <td>{key.language}</td>
                <td>{key.description}</td>
                <td>{key.size}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
