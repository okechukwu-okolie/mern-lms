import React from 'react'
import { Outlet } from 'react-router-dom'

const StudentViewCommonLayout = () => {
  return (
    <div>
      this is the student view common layout
      <Outlet/>
    </div>
  )
}

export default StudentViewCommonLayout
