import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData.js'

export default function TrendCard() {
  return (
    <div className="TrendCard">
        <h3>Trends for you</h3>
        {TrendData.map((trend , i) =>{
           return (
            <div key={i} className='trend'>
                <span>#{trend.name}</span>
                <span>{trend.shares}k shares</span>
            </div>
           )
        })}
    </div>
  )
}
