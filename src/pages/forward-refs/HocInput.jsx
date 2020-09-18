import React from 'react'
import ComponentWithHoc from './ComponentWithHoc'
const HocInput = (props) => {
  console.log('props:::', props)
  return (
    <>
      <h4>children: {props.children}</h4>
      <h4>name: {props.name}</h4>
      <h4>hocId: {props.hocId}</h4>
      <span>高阶输入值：</span><input defaultValue="高阶输入的..." ref={props.hocRef} type="text" />
    </>
  )
}
export default ComponentWithHoc(HocInput)
