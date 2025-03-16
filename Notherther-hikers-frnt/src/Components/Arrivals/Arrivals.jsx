import React from 'react'
import show from "../../assets/arrivales.jpg"
import './Arrivals.css'
const Arrivals = ({setExptracker}) => {
  return (
    <div className="nhval-arrivals">
       <div className='Arrivals'>
       <h3 class="nhval-mainhighlights-header">New Arrivals</h3>
       <h4>وصول جديد</h4>  
        <div className="arrivals-outer">
        
        <div className='arrivals-item' onClick={(e)=>{e.preventDefault();window.scroll(0, 0);setExptracker(true)}}><img src={show} alt="" /><div>TRAVEL EXPENCE TRACKER</div> </div>
        <div className='arrivals-item'><img src={show} alt="" /><div>WEATHER PODCAST</div> </div>
        <div className='arrivals-item'><img src={show} alt="" /><div>AUTHORS NEWSLETTER</div></div>
       <div className='arrivals-item'><img src={show} alt="" /> <div>LATTEST PRECAUTION</div></div>
      </div>
     </div>
    </div>
 

  )
}

export default Arrivals
