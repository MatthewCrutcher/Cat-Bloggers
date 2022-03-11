import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
