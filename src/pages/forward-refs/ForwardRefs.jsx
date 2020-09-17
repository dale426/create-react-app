import React, { useRef, useState } from 'react'
import WrapInput from './WrapInput'
import HocInput from './HocInput'

const ForwardRefs = () => {
  const [input, setInput] = useState(null)
  const cRef = useRef()
  const dRef = useRef()
  const getRefs = () => {
    console.log('cRef:::', cRef)
    setInput(cRef.current.value)
  }
  return (
    <>
      <WrapInput ref={cRef} size={20}>
        tips值
      </WrapInput>
      <button onClick={getRefs}>获取 WrapInput 组件实例</button>
      <p>
        获取实例输入值为： <strong>{input}</strong>
      </p>
      <hr />
      {/* hoc高阶函数转发refs */}
      <p>hoc高阶函数转发refs</p>
      <HocInput ref={dRef}>密码(必填)</HocInput>
    </>
  )
}
export default ForwardRefs
