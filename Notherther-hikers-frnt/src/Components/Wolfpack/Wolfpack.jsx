import React from 'react'
import CircularGallery from './CircularGallery'
import './Wolfpack.css';
const Wolfpack = () => {
  return (
    <>
    <div className="nh-wolfpack">
        <div className="wofpack-container">
          <h3>WOLFPACK</h3>
        <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
         </div>
        </div>
    </div>
    </>
  )
}

export default Wolfpack
