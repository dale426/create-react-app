import React from 'react'
import { useParams } from 'react-router-dom'
export default () => {
  const { id } = useParams()
  return (
    <>
      <p>
        组件中获取到的 url参数为: <strong>{id}</strong>
      </p>
    </>
  )
}
