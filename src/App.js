import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import User from "./User";
import UserForm from "./UserForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />}></Route>
        <Route path="/user/:name" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
