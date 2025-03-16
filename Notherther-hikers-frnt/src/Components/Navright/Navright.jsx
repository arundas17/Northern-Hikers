import React from 'react';
import './navright.css';

const Navright = ({setQuick,setSocialchat}) => {
  return (
    <div className='nh-navright nh-navbar'>
      <ul>
        <li><a href="#" onClick={() => setQuick(true)}>QUICKINFO</a></li>  
        <li><a href="#">WOLFPACK</a></li>
        <li><a href="#">FAMILY</a></li>
        <li><a href="#" onClick={()=>setSocialchat(true)}>SOCIAL</a></li>
      </ul>
    </div>
  );
};

export default Navright;
