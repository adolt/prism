import 'normalize.css'
import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Landing from './Landing'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <Route exact path='/' component={Home} />
    <Route path='/landing' component={Landing} />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
