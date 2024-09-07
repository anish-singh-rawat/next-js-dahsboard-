import React from 'react'

const DeleteUser = () => {
  const handleDeleteUser = ()=>{
    console.log('handleDeleteUser');
  }
  return (
   <>
   <div onClick={handleDeleteUser}
    className="btn btn-danger btn-sm mr-2  mx-5">
    delete
   </div>
   </>
  )
}

export default DeleteUser