import Bv from './Bv.mp4'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
function VideoCompo() {
  return (
    <div>
       <video className='videoTag myvid' autoPlay loop muted>
        <source src={Bv} type='video/mp4' />
        </video>
    </div>
  )
}

export default VideoCompo
