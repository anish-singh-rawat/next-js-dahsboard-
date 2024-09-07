'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AllUser.css'
import { CircularProgress } from '@mui/material'
import DeleteUser from './deleteUser/page.jsx'
import DeleteEmail from './deleteEmail/page.jsx'
import EditMail from './editmail/page.jsx'
import EditUser from './editUser/page.jsx'

const page = ({ handleDeleteUser, handleEditUser, handleDeleteEmail, handleEditEmail }) => {
  const [user, setUser] = useState([])

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/getUsers")
    setUser(response.data.users)
    console.log(user);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {
        user.length > 0 ?
          user.map((data) => (
            <div key={data._id} className="card mb-3 shadow"
              style={{ border: "2px solid #17a2b8" }}>
              <div className="card-body bg-light">
                <div className='d-flex justify-content-between align-items-center'>
                  <h5 className="card-title text-primary">{data.name}</h5>
                  <div className='d-flex'>
                    <DeleteUser onClick={() => handleDeleteUser(data._id)} />
                    <EditUser onClick={() => handleEditUser(data._id)} />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className="card-text text-muted">{data.email}</p>
                  <div className='d-flex '>
                    <DeleteEmail onClick={() => handleDeleteEmail(data._id)} />
                    <EditMail onClick={() => handleEditEmail(data._id)} />
                  </div>
                </div>
              </div>
            </div>
          ))
          :
          <div style={{ height: "100vh" }}
            className='d-flex justify-content-center align-items-center'>
            <CircularProgress />
          </div>
      }
    </>
  )
}

export default page