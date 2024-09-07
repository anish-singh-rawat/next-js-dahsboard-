"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

const ClientComponent = () => {
  const { data: session, status } = useSession()

  return (
    <>
      <div>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'authenticated' && (
          <p>Welcome, {session.user.name}! (Email: {session.user.email})</p>
        )}
        {status === 'unauthenticated' && <p>Not logged in</p>}
      </div>
    </>
  )
}

export default ClientComponent
