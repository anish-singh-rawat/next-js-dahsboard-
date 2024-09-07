import React from 'react'

const EditMail = () => {
  const handleEditEmail = ()=>{
    console.log('handleEditEmail');
  }
  return (
    <div onClick={handleEditEmail} className='btn btn-primary btn-sm'>Edit</div>
  )
}

export default EditMail