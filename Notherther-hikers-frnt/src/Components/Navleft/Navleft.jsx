import React from 'react'
import './Navleft.css'

const Navleft = ({setJaz,setHeelBlend}) => {
  return (
    <div className='nh-navleft nh-navbar'>
      <ul>
        <li><a href="">AUTHERS</a></li>
        <li><a href="" onClick={(e)=>{e.preventDefault(); setHeelBlend(true)}}>HEELBLEND</a> </li>
        <li><a href="" onClick={(e) => {
            e.preventDefault(); 
            setJaz(true);}}>COUSTOMERCARE</a></li>
      </ul>
    </div>
  )
}

export default Navleft
