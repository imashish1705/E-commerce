import React ,{useEffect}from 'react'
import HomePage from './containers/HomePage'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProductListPage from './containers/ProductListPage';
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import ProductDetailsPage from "./containers/ProductDetailsPage";
/**
* @author
* @function App
**/

const App = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return(
    <div className= "App">
    <Router>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route path = "/:productSlug/:productId/p"  component = {ProductDetailsPage}/>
        <Route path = "/:slug"  component = {ProductListPage}/>
        
      </Switch>
    </Router>
    </div>
   )

 }

export default App