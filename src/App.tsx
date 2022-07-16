import React from "react";
import { Routes, Route } from "react-router-dom";
import { Clients } from "./pages/Clients";
import { Home } from "./pages/Home";
import { Navigation } from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
