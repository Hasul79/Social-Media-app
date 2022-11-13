import React from 'react';
import Logo from '../../images/logo.png';
import {UilSearch} from '@iconscout/react-unicons';
import './LogoSearch.css';


const LogoSearch = () => {
  return (
    <div className="LogoSearch">
       <img src={Logo} alt="" />
      {/* <h6>Meta<span style={{color:"orange", fontSize:"18px"}}>Kids</span></h6> */}
      <div className="Search">
       <input type="text" placeholder='#Explore' />
       <div className="s-icon">
        <UilSearch />
        </div>
       </div>
    </div>
  )
}

export default LogoSearch