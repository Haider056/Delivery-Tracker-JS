import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={login}></Route>
      </Routes>
    </Router>
  );
}

export default App;
