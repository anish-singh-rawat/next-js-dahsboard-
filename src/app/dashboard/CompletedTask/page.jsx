import React from 'react'
import './completedTask.css'

const page = () => {
  return (
   <div className="container">
    <div className="row">
        <div className="col">
            <div className="settings">
                <center>
                        <h1 className='mt-5'>
                        There are No completed task available
                        </h1>
                </center>
            </div>
        </div>
    </div>
   </div>
  )
}

export default page