import React from 'react'
const ComponentWithHoc = (WrappedComponent) => {
  const HocCom = React.forwardRef((props, refs) => {
    console.log('props2:::', props)
    // 高阶组件获取到的值
    const hocId = 'true-0001'
    return <WrappedComponent hocRef={refs} {...props} hocId={hocId}/>
  })
  return HocCom
}
export default ComponentWithHoc
