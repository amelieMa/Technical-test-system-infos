import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import Layout from './components/layout/Layout'
import * as serviceWorker from './serviceWorker'
/* import { Provider } from 'react-redux'
import store from './store' */
import './index.css'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById('root')
);

