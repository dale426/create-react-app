import React from 'react'
import { useParams } from 'react-router-dom'
export default () => {
  const code = '<img />'
  const code2 = "<script>alert('xss')</script>"
  const { id } = useParams()
  console.log('useParams():::', useParams())
  //   ----------
  const jsx = React.createElement(
    'h3',
    {
      className: 'my-h3'
    },
    '这是一个通过 React.createElement 创建的函数'
  )
  return (
    <>
      <h2>HTML内容会被自动转义</h2>
      <div>
        展示内容
        <code>{code}</code>
        {code2}
      </div>
      <p>
        <code>useParams</code> 获取的URL参数：{id}
      </p>
      <hr />
      <div>{jsx}</div>
    </>
  )
}
