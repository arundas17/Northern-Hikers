import React, { useState } from 'react'
import './Hilites.css';
import img1 from '../../assets/hm1.JPG'
import img2 from '../../assets/hm6.JPG'
import img3 from '../../assets/hm3.JPG'
import img4 from '../../assets/hm4.JPG'
import img5 from '../../assets/hm21.JPG'
import img6 from '../../assets/hm51.JPG'
import img7 from '../../assets/hm7.JPG'
import img8 from '../../assets/h8.JPG'
import img9 from '../../assets/hm9.JPG'
import CloseIcon from "@mui/icons-material/Close";
const Hilites = () => {
    const highlightsData=[
        {
         id:1,
         imgSrc:img3
        },
        {
            id:2,
            imgSrc:img1
        },
        {
            id:3,
            imgSrc: img9
        },
        {
            id:4,
            imgSrc:img6
        },
        {
            id:5,
            imgSrc:img8
        },
        {
            id:6,
            imgSrc:img7
        },
        {
            id:7,
            imgSrc:img6
        },
        {
            id:8,
            imgSrc:img2
        },
        {
            id:9,
            imgSrc:img5
        },
        {
            id:10,
            imgSrc:img4
        },
        {
            id:11,
            imgSrc:img2
        },
        {
            id:12,
            imgSrc:img5
        } 
    ]

    const [model,setModel]=useState(false);
    const [temimg,setTempimg]=useState('');
    const getItem=(imgSrc)=>{
       setTempimg(imgSrc);
       setModel(true)
    }
  return (
    <>
    <div className="nh-autherhighlights">
    <div className={model ? "model open" : "model"} onClick={() => setModel(false)}>
    {temimg && <img src={temimg} alt="Selected highlight" />}
     <CloseIcon onclick={()=>setModel(true)}/> 
    </div>
    <div className='nh-highlights'>
      <h3>AUTHORS HIGHLIGHTS</h3>
      <h4>يسلط الضوء على المؤلفين</h4>
      <div className="nh-highlites-gallery">
         {highlightsData.map((item,index)=>{
            return(
               <div className='highlights-item' key={item.id} onClick={()=>getItem(item.imgSrc)}>
                  <img src={item.imgSrc} alt="" className='highlightsitem-image'/>
                </div>
            )
         })}
      </div>
    </div>
    </div>
    

    
    </>
    
  )
}

export default Hilites
