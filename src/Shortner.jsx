import React from 'react'

const Shortner = () => {
  return (
   <div className="input-container">
    <h1>URL <span>Shortener</span></h1>
    <div>
      <input type="text" placeholder='Paste the link'/>
      <button>Shorten</button>
    </div>
   </div>
  )
}

export default Shortner