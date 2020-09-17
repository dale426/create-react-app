import React, { useState } from 'react'
export default (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  return (
    <div
      style={{ height: '400px', border: '2px solid red' }}
      onMouseMove={(event) =>
        setPosition({
          x: event.clientX,
          y: event.clientY
        })
      }
    >
      <h2>
        这是mouse组件, 当前坐标 <hr /> 
        <strong>
          x: {position.x} y: {position.y}
        </strong>
      </h2>
      {props.render(position)}
    </div>
  )
}
