import React, { useState } from 'react'
import Timer from './Timer';

function Toggle() {
  const [showTimer, setShowTimer] = useState(false);
  const onClick = () => {
    setShowTimer(!showTimer)
  }
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={onClick}>Toggle Timer</button>
    </div>
  )
}

export default Toggle;