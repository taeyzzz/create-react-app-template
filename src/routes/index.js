import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import browserHistory from './history'

import Applcation from '../containers/Application'

const handleRouteChanged = (arg) => {
  window.scrollTo(0, 0);
}

browserHistory.listen(arg => {
  handleRouteChanged(arg)
})

export default (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home"/>} />
      <Route path='/home' component={Applcation} />
    </Switch>
  </Router>
)
