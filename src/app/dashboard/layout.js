import React from 'react'
import UserDashBoard from '../component/dashboard'

const layout = ({children}) => {
  return (
    <div style={{backgroundColor : '#2d3436', color : 'white'}}>
        <UserDashBoard  pages={children}/>
        </div>
  )
}

export default layout