import React,{useEffect} from 'react';
//import Layout from './components/Layout'
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
//import Header from "./components/Header";
import PrivateRoute from "./components/HOC/PrivateRoute";
import {useDispatch , useSelector} from "react-redux";
import { isUserLoggedIn,getInitialData } from "./actions";
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
import NewPage from './containers/NewPage';

function App() {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();

   useEffect(()=>{
        if(!auth.authenticate) {
            dispatch(isUserLoggedIn());
        }
        dispatch(getInitialData());
    },[]);
  return (
    <div>
  
     <Switch>
         <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/page" component={NewPage} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
         

       
        <Route  path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  )
}
export default App;