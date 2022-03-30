import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import SignUp from "./components/SignUp";
import "./App.css";
import Login from "./components/Login";
import Feed from "./components/Feed";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
