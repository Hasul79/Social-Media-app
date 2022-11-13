import React from 'react';
import "./Post.css"
import Comment from '../../images/comment.png'
import Share from '../../images/share.png'
import Heart from '../../images/like.png'
import NotLike from '../../images/notlike.png'

export default function Post({data}) {
  return (
    <div className="Post"> 
      <img src={data.img} alt="" />

      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span>{data.likes} likes</span>

      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}
