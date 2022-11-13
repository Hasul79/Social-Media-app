import React from 'react'
import './ProfileCard.css'
import Dog from '../../images/dog.webp';
import Profile from '../../images/profile.jpg';

export default function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Dog} alt='' />
        <img src={Profile} alt='' />
      </div>

      <div className="ProfileName">
        <span >Ani Araqelyan</span>
        <span>Foto-Model</span>
      </div>

      <div className='followStatus'>
        <hr />
        <div>
          <div className='follow'>
            <span>1.245</span>
            <span>Followings</span>
          </div>
          <div className='vl'></div>
          <div className="follow">
            <span>119</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
    <span>
      My Profile
    </span>
    </div>
  )
}
