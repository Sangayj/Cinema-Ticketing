import React from "react";

import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
