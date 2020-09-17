import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import ReactDom from '../pages/ReactDom'
import ForwardRefs from '../pages/forward-refs/ForwardRefs'
import RenderProp from '../pages/render-prop/RenderProp'
import UrlParamsRoute from './url-params'

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
          <li>
            <Link to="/url-params">url-params</Link>
          </li>
          <li>
            <Link to="/react-dom">react-dom</Link>
          </li>
          <li>
            <Link to="/render-prop">render-prop</Link>
          </li>
          <li>
            <Link to="/refs">转发refs</Link>
          </li>
        </ul>
        {/* 路由组件加载 */}
        <Switch>
          {/* 沒有子路由需要添加 exact参数 */}
          <Route exact path="/">
            <h3>home 路由 /</h3>
          </Route>
          <Route exact path="/url-params">
            <UrlParamsRoute />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/render-prop">
            <RenderProp />
          </Route>
          <Route path="/refs">
            <ForwardRefs />
          </Route>
          <Route
            path="/react-dom"
            render={(props) => {
              return <ReactDom {...props}/>
            }}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
