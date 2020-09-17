import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

export default (props) => {
  console.log('props:::', props)
  useEffect(() => {
    const I = setInterval(renderFn, 1000)
    return clearInterval(I)
  }, [])

  const renderFn = () => {
    const el = (
      <footer>
        我是一个独立的页脚，存放在独立的根div中---
        <strong>现在时间是： {new Date().toLocaleTimeString()}</strong>
      </footer>
    )
    ReactDOM.render(el, document.getElementById('bottom'))
  }
  return (
    <>
      <h2>
        <strong>React Dom</strong>
      </h2>
      <hr />
    </>
  )
}
