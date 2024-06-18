import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Auths/Login";
import SignUp from "./components/Auths/SignUp";
import Cam from "./pages/Cam";
import Bubble from "./pages/Bubble";
import MemTwit from "./pages/MemTwit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auths/login" element={<Login />}></Route>
          <Route path="/auths/signup" element={<SignUp />}></Route>
          <Route path="/cam" element={<Cam />}></Route>
          <Route path="/bubble" element={<Bubble />}></Route>
          <Route path="/memtwit" element={<MemTwit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
