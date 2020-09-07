import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
export default function RoutesPage() {
  return (
    <>
      <BrowserRouter>
        <h2>React router</h2>
        {/* 导航 */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        {/* 路由组件加载 */}
        <Switch>
          {/* 沒有子路由需要添加 exact参数 */}
          <Route exact path="/">
            <h3>home 路由 /</h3>
          </Route>
          <Route path="/dashboard">
            <span>路由 dashboard</span>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
