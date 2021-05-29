import React, { useEffect } from 'react'
import { getAllCategory } from '../../actions';
import Layout from '../../components/Layout';
import {useDispatch} from "react-redux";
import "./style.css";
import logo from "./photo.jpg";
/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const {match} = props;
        dispatch(getAllCategory(match.params.slug))
    },[]);

  return(
    <Layout>
     <div className = "card">
         <div className = "cardHeader">
             <div>iPhone mobile under 10k</div>
             <button>View all </button>
         </div>
         <div>
             <div className = "productContainer">
                 <div className = "productImageContainer">
                     <img src ={logo} alt =""/>
                 </div>
                 <div className = "productInfo">
                     <div style ={{margin : "5px 0"}}>Iphone 4gb phone</div>
                     <div>
                     <span>4.3</span>
                     <span>3353</span>
                     
                 </div>
                 <div calssName ="productPrice ">50000</div>
             </div>
             </div>

         </div>
     </div>

    </Layout>
   )

 }

export default ProductListPage