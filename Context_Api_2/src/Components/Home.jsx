import React from 'react'

import Dashboard from "./Dashboard"
// import SideNav from "./SideNav"


export default function Home() {
  return (
    <div className='flex justify-between'>
      {/* <SideNav /> */}
      <Dashboard />
    </div>
  )
}

