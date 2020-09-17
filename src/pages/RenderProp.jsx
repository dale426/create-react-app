import React from 'react'
import Mouse from './render-prop/Mouse'
import Cat from './render-prop/Cat'
export default () => {
  return (
    <>
      <Mouse render={(mouse) => <Cat mouse={mouse}></Cat>}></Mouse>
    </>
  )
}
