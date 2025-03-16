import React from 'react'
import './social.css'

const Socail = ({setSocial}) => {
  return (
    <div className='nh-social'>
      <div className="nh-social-container">
      <h1>CONNECT US WITH YOUR INSTAGRAM ACCOUNT</h1>
      <button onClick={()=>setSocial(false)}>Back to Home</button>
      </div>
    </div>
  )
}

export default Socail
