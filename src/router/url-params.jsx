import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import UrlParams from '../pages/UrlParams'
const UrlParamsRoute = () => {
  return (
    <>
      <BrowserRouter>
        <h2>2. 获取路由参数</h2>
        {/* 导航 */}
        <ul>
          <li>
            <Link to="/page-a">url-a</Link>
          </li>
          <li>
            <Link to="/page-b">url-b</Link>
          </li>
        </ul>
        {/* 路由组件加载 */}
        <Switch>
          {/* 沒有子路由需要添加 exact参数 */}
          <Route path="/:id">
            <UrlParams />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default UrlParamsRoute