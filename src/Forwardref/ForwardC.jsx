import React, { forwardRef } from 'react'

const ForwardC = (prop,ref) => {
  return (
    <div><input type="text" ref={ref}/></div>
  )
}

export default forwardRef(ForwardC) 