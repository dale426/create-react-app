import React, { useRef, useState } from 'react'
import WrapInput from './WrapInput'
import HocInput from './HocInput'

const ForwardRefs = () => {
  const [input, setInput] = useState(null)
  const [hocVal, setHocVal] = useState(null)
  const cRef = useRef()
  const dRef = useRef()
  const getRefs = () => {
    console.log('组件转发的ref:::', cRef)
    setInput(cRef.current.value)
  }
  const getHocRefs = () => {
    console.log('获取高阶组件转发的ref:::', dRef)
    setHocVal(dRef.current.value)
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
      <h2>--hoc高阶函数转发refs</h2>
      <p>
        -----start----通过高阶组件转发的的refs，
        通过该refs获取input输入的值-----start----
      </p>
      <button onClick={getHocRefs}>获取下面高阶输入框中的值</button>：
      <strong>{hocVal}</strong>
      <p>---------------end--------------------</p>
      <HocInput size={20} name="hocCom" ref={dRef}>
        密码(必填)
      </HocInput>
    </>
  )
}
export default ForwardRefs
