import React, {useState} from 'react'
import {Menu} from 'antd'
import { NavLink } from 'react-router-dom'

import SystemInfosRouter from 'modules/systemInfos/SystemInfosRouter'

import './layout.css'

const Layout = () => {
  const [currentMenu, setCurrentMenu] = useState('filtered')

  return (
    <div className="layout">
      <Menu onClick={(e) => setCurrentMenu(e.key)} selectedKeys={[currentMenu]} mode="horizontal">
        <Menu.Item key="filtered">
          <NavLink
            to={"/"}
            className="navigationItem_Link"
            activeClassName="active"
            exact
          >
            System Infos Filtered
          </NavLink>

        </Menu.Item>
        <Menu.Item key="all">
          <NavLink
            to={"/all"}
            className="navigationItem_Link"
            activeClassName="active"
            exact
          >
            System Infos All
          </NavLink>
        </Menu.Item>
      </Menu>
      <main className='layout_content'>
        { SystemInfosRouter }
      </main>
    </div>
  )
}


export default Layout
