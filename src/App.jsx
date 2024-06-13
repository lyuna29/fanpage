import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Auths/Login";
import SignUp from "./components/Auths/SignUp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auths/login" element={<Login />}></Route>
          <Route path="/auths/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
