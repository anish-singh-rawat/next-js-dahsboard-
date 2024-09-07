import React from 'react'

const LCSButton = () => {
  return (
    <div style={{fontSize : "20px"}}
    className="d-flex mt-2 justify-content-around">
        
        <div style={{cursor : "pointer"}} 
        className="icon fas fa-heart"></div>

        <div style={{cursor : "pointer"}} 
        className="icon fas fa-comment"></div>

        <div style={{cursor : "pointer"}} 
        className="icon fas fa-share"></div>
</div>
  )
}

export default LCSButton