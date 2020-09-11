import React from "react";
import "./styles.css";
import RoutesPage from './router'
import UrlParamsRoute from './router/url-params'
export default function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <RoutesPage/>
      <UrlParamsRoute/>
    </div>
  );
}
