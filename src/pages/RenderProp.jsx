import React, { useCallback } from 'react'
import Mouse from './render-prop/Mouse'
import Cat from './render-prop/Cat'
export default () => {
  /**
   * catFn  放在实例中，组件更新时，render指向的始终是相同的函数
   */
  const catFn = useCallback((mouse) => {
    return <Cat mouse={mouse}></Cat>
  }, [])
  return (
    <>
      {/* 方法一 */}
      {/* 组件更新时， 会生成一个新的函数 作为render */}
      {/* <Mouse render={(mouse) => <Cat mouse={mouse}></Cat>}></Mouse> */}

      {/* 方法二 */}
      <Mouse render={catFn} />
    </>
  )
}
