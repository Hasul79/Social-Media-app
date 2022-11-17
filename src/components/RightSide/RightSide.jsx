import React from 'react'
import './RightSide.css'
import Home from '../../images/home.png'
import Noti from '../../images/noti.png'
import Comment from '../../images/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'

export default function RightSide() {
  return (
    <div className="RightSide">
         <div className="navIcons">
            <img src={Home} alt="" />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
            <UilSetting />
        </div>

        <TrendCard />

        <button className="button r-button">
          Share
        </button>
    </div>
  )
}
