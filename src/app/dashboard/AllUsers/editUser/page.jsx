import React from 'react'

const EditUser = () => {
  const handleEditUser =()=>{
    console.log('handleEditUser');
  }
  return (
    <div onClick={handleEditUser} className='btn btn-primary btn-sm'>Edit</div>
  )
}

export default EditUser