import React, { useContext } from 'react'
import { AuthContext } from '@/context/auth-context'

const StudentHomePage = () => {
  const { handlebacktoSignIn, change } = useContext(AuthContext);

  return (
    <div>
      <button onClick={handlebacktoSignIn} className='border-3 p-3'>CLICK ME....</button>
      {change ? "this is the student homepage" : "this is not the student homepage"}
    </div>
  )
}

export default StudentHomePage
