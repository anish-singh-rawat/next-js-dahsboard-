'use client'
import React, { useState } from 'react'
import './UserProfile.css'
import img from './img.png' 
import { CircularProgress } from '@mui/material';
import { useSession } from 'next-auth/react'

const page = () => {
  const randomNumber = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
  const randomNumber2 = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  const { data: session, status } = useSession()
  if (status === "loading") {
    return(
        <div style={{height : "100vh"}}  className='d-flex justify-content-center align-items-center'>
        <CircularProgress/>
        </div>
    )
  }
  return (
    <>
      <div className="header ">
        <div className="top-left-header">
          <div className="sub-pic">
            <img src={img.src} className='sub-pic'/>
          </div>
          <div className="top-sub-header mt-2 mx-3">
            <div className="name">Emplooy Name : {session?.user?.name} </div>
            <div className="work">designation :  React JS developer</div>
            <div className="id">Emplooy ID : {randomNumber}</div>
          </div>
        </div>
        <div className="top-right-header">
          <div className="name">Emplooy email :  {session?.user?.email} </div>
          <div className="work">designation : React JS developer</div>
          <div className="id">Emplooy UID : {randomNumber2}</div>
        </div>
      </div>
      <br />
      <center>
        <h2>As a React delevoper you have follow some steps : -</h2>
      </center>
      <br />
      <br />
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1498777628/quality_q31k6u.png" className="aboutImage" alt="High Quality Lectures" />
              <h2>High Quality Code</h2>
              <p>A quality code is one that is clear, simple, well tested, bug-free, refactored, documented, and performant.</p>
            </div>
            <div className="col-md-4">
              <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1498777629/tools_yorndk.png" className="aboutImage" alt="+80H of Rich Content" />
              <h2>Implementing app modifications.</h2>
              <p>An implementation plan gives an outline of the specific steps needed to go through in order to end up with a well-performing app. </p>
            </div>
            <div className="col-md-4">
              <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1498777627/help_dfec8u.png" className="aboutImage" alt="Get Help Anytime!" />
              <h2>Ability to find and correct errors effectively</h2>
              <p>
                Definition. Error recognition refers to the ability to recognize or detect the presence of an error; recognition may happen as the error is being made or after it has occurred.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page