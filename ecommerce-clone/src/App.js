import React from 'react'
import HomePage from './containers/HomePage'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProductListPage from './containers/ProductListPage';


/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <div className= "App">
    <Router>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route path = "/:slug"  component = {ProductListPage}/>
      </Switch>
    </Router>
    </div>
   )

 }

export default App