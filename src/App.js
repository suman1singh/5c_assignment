import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import EditUser from "./EditUser";
import User from "./User";
import UserForm from "./UserForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route path="/user/:name" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
