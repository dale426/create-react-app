import React from 'react'
const WrapInput = React.forwardRef((props, ref) => {
  return (
    <>
      <span>{props.children}</span>
      <input ref={ref} />
    </>
  )
})
export default WrapInput
