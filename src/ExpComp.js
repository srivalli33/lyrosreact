import React from 'react'
import { memo } from 'react'
 function ExpComp(count) {
    console.log("ExpComp Rendered",count,"times")
  return (
    <div>ExpComp </div>
  )
}
export default memo(ExpComp)