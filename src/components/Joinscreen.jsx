import React from 'react'

function Joinscreen({start}) {
  return (
    <div className='join-screen'>
<h2>HOME</h2>
<p>Click on start button to start your quiz </p>
<button onClick={start}> Start</button>
    </div>
  )
}

export default Joinscreen;