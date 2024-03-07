import React from 'react'
import { memo } from 'react'
 function ExpComp() {
    console.log("ExpComp Rendered")
  return (
    <div>ExpComp</div>
  )
}

export default memo(ExpComp)