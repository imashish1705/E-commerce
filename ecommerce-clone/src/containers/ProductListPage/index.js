import React, { useEffect , useState} from 'react'
import { getAllCategory } from '../../actions';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import logo from "./photo.jpg";
import { generatePublicUrl } from '../../urlConfig';
/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {


    const product = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [priceRange , setPriceRange] = useState({
        under5k : 5000,
        under10k : 10000,
        under15k : 15000,
        under20k : 20000,
        under30k : 30000
      });

    useEffect(() => {
        const { match } = props;
        dispatch(getAllCategory(match.params.slug))
    }, []);

    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>{props.match.params.slug}iPhone mobile under {priceRange[key]}</div>
                                <button>View all </button>
                            </div>
                            <div style ={{display :"flex"}}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <div className="productContainer">
                                            <div className="productImageContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: "5px 0" }}>{product.name}</div>
                                                <div>
                                                    <span>4.3</span>
                                                    <span>3353</span>

                                                </div>
                                                <div calssName="productPrice">{product.price}</div>
                                            </div>
                                        </div>


                                    )
                                }
                            </div>
                        </div>


                    )
                })
            }


        </Layout>
    )

}

export default ProductListPage