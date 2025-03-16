import React from 'react'
import valgan from '../../assets/gangtok.JPG';
import valgul from '../../assets/gulmurg.JPG';
import valspiti from '../../assets/tawang.JPG';
import valtaw from '../../assets/spiti.JPG';
import './Valhighlights.css';
const Valhighlights = () => {
    const valhighlightitems=[
        {
            id:100,
            valimg:valgan,
            desc:"GANGTOK"
            
        },
        {
            id:101,
            valimg:valgul,
            desc:"GULMARG"

            
        },
        {
            id:102,
            valimg:valspiti,
            desc:"SPITI VALLEY"
            
        },
        {
            id:103,
            valimg:valtaw,
            desc:"TAWANG"
        }
    ]
  return (
    <div className='nhval-mainhighlights'>
      <div className="nhval-mainhighlights-container">
        <h3 className='nhval-mainhighlights-header'>HIGHLIGHTS</h3>
        <h4>أبرز المعالم</h4>
        
        <div className="nhval-mainhighlights-imgwrap">
        {valhighlightitems.map((item,index)=>{
            return(
                <div className="nhval-mainhighlights-imgitem" key={index}>
                    <img src={item.valimg} alt="" />
                    <a href="">{item.desc}</a>
                </div>
            )
        })

          }
        </div>
        
      </div>
    </div>
  )
}

export default Valhighlights

