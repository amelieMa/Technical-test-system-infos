import React from 'react'

import SystemInfosRouter from 'modules/systemInfos/SystemInfosRouter'

import './layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <main className='layout_content'>
        { SystemInfosRouter }
      </main>
    </div>
  )
}


export default Layout
