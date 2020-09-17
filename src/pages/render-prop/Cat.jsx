import React from 'react'
// 引入图片
import logo from '../../img/logo.png'
// const logo = require('../../img/logo.png')
// 引入样式
import './cat.css'
export default (props) => {
  console.log('props:::', props)
  const { x, y } = props.mouse
  return (
    <>
      <p>
        cat组件中接受到的props值{' '}
        <strong style={{ color: 'red' }}>
          x: {x} y: {y}
        </strong>
      </p>
      <img className="logo-img" style={{top: y, left: x}} src={logo} alt="" />
    </>
  )
}
