import React from 'react'
//import Layout from './components/Layout'
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
//import Header from "./components/Header";
import PrivateRoute from "./components/HOC/PrivateRoute";
 function App() {
  return (
    <div>
  
     <Switch>
        {/* <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/page" component={NewPage} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
         */}

        <PrivateRoute path="/" exact component={Home} />
        <Route  path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  )
}
export default App;