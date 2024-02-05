'use client'

import React from 'react'
import Button from "@/components/Button"

const Counter = () => {
  const [count, setCount] = React.useState(0)

  const handleClickPlus = () => {
    setCount(count + 1)
  }
  
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      カウンター
      <Button onClick={handleClickPlus}>+1</Button>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      {count}
    </div>
  )
}

export default Counter