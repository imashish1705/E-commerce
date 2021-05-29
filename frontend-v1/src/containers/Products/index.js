import Input from "../../components/UI/Input"
import { Container, Row, Col, Table } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../actions";
import Layout from "../../components/Layout";
import Modal from "../../components/UI/Modal";
/**
* @author
* @function Product
**/

const Product = (props) => {

    const [show, setShow] = useState(false);
    const category = useSelector((state) => state.category);
    const product = useSelector((state) => state.product);

    const handleClose = () => {
        const form = new FormData();
        form.append("name", name);
        form.append("quantity", quantity);
        form.append("price", price);
        form.append("description", description);
        form.append("category", categoryId);

        for (let pic of productPictures) {
            form.append("productPicture", pic);
        }
        dispatch(addProduct(form));
        setShow(false);


    }
    const dispatch = useDispatch();

    const handleShow = () => setShow(true);
    const [name, setName] = useState("");
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDiscription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [productPictures, setProductPictures] = useState([]);


    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({
                value: category._id,
                name: category.name,

            });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }

    const handleProductPictures = (e) => {
        setProductPictures([...productPictures, e.target.files[0]]);
    };



    const renderProducts = () => {
        return (
            <Table style={{ fontSize: 12 }} responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                     {product.products.length > 0
                ? product.products.map((product) => (
                    <tr key={product._id}>
                      <td>2</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.category.name}</td>
                      <td>
                        {/* <button onClick={() => showProductDetailsModal(product)}>
                          info
                        </button>  */}
                    {/* <button
                          onClick={() => {
                            const payload = {
                              productId: product._id,
                            };
                            dispatch(deleteProductById(payload));
                          }}
                        >
                          del
                        </button> */}
                      </td>
                    </tr>
                  ))
                        : null} 

                  
                </tbody>
            </Table>
        );
    };


    return (
        <div>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h3>Product</h3>
                                <button onClick={handleShow}>Add</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {renderProducts()}
                        </Col>
                    </Row>


                </Container>

                <Modal show={show} handleClose={handleClose}
                    modalTitle={"Add New Product"}
                >

                    <Input
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder="Enter product Name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <Input
                        placeholder="Enter product Desc"
                        value={description}
                        onChange={(e) => setDiscription(e.target.value)}
                    />
                    <Input
                        placeholder="Enter product Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Input
                        placeholder="Enter product quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />

                    <select className="form-control"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        <option>
                            Select category
                            </option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value} >{option.name}</option>)
                        }
                    </select>
                    <input type="file" name="productPrice" onChange={handleProductPictures} />


                </Modal>

            </Layout>
        </div>
    )

}

export default Product