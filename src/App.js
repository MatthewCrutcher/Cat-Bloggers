import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import SignUp from "./components/SignUp";
import "./App.css";
import Login from "./components/Login";

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
      </div>
    </Router>
  );
}

export default App;
