import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SystemInfosFiltered from './SystemInfosFiltered'
import SystemInfosAll from './SystemInfosAll'

const SystemInfosRouter = (
  <>
    <Switch>
      <Route path="/" component={SystemInfosFiltered} exact/>
      <Route path="/all" component={SystemInfosAll} exact/>
    </Switch>
  </>
)

export default SystemInfosRouter
