import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import Search from './components/Search/Search'
import MyList from './components/MyList/MyList'


class App extends React.Component{
  render(){
    const {history} = this.props
    return(
      <Switch>
        <Route history={history} path='/mylist' component={MyList} /> 
        <Route history={history} path='/search' component={Search} />
        <Redirect from='/' to='/search'/>
      </Switch>
    )
  }
}

export default withRouter(App);