import React from "react";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
export default function App() {
  return (
    <div className="App">
      <h1>路由学习</h1>
      <BrowserRouter>
        <Route path="/dashboard">
          <h3>路由一</h3>
        </Route>
      </BrowserRouter>
    </div>
  );
}
