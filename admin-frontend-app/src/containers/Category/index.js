import React, { useEffect, useState } from 'react'
import Layout from "../../components/Layout"
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getAllCategory } from "../../actions";
import Input from "../../components/UI/Input"
import Modal from "../../components/UI/Modal"
import CheckboxTree from "react-checkbox-tree";
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import {
  IoIosCheckboxOutline,
  IoIosCheckbox,
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosAdd,
  IoIosTrash,
  IoIosCloudUpload
} from 'react-icons/io'

/**
* @author
* @function Category
**/

const Category = (props) => {
  const category = useSelector(state => state.category);

  const dispatch = useDispatch();




  const [show, setShow] = useState(false);


  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState('');
  const [categoryImage, setCategoryImage] = useState('')
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
  const handleClose = () => {
    const form = new FormData();

    form.append("name", categoryName);
    form.append("parentId", parentCategoryId);
    form.append("categoryImage", categoryImage);
    dispatch(addCategory)
    // const cat = {
    //   categoryName,
    //   parentCategoryId,
    //   categoryImage,
    // };
    setShow(false);
    //console.log(cat)
  }


  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        {
          label: category.name,
          value: category._id,
          children: category.children.length > 0 && renderCategories(category.children)
        }
      );
    }
    return myCategories;
  }

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id,
        name: category.name,
        parentId: category.parentId,
        type: category.type
      });
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }

    return options;
  }

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  }

  const updateCategory = () => {
    //updateCheckedAndExpandedCategories();
    setUpdateCategoryModal(true);
    const categories = createCategoryList(category.categories);
    const checkedArray = [];
    checked.length > 0 && checked.forEach((categoryId, index) => {
      const category = categories.find((category, _index) => categoryId == category.value);
      category && checked.push(category);
    })
    const expandedArray = [];
    expanded.length > 0 && expanded.forEach((categoryId, index) => {
      const category = categories.find((category, _index) => categoryId == category.value);
      category && expandedArray.push(category);
    })
    setCheckedArray(checkedArray);
    setExpandedArray(expandedArray);
    console.log({ checked, expanded, categories, checkedArray, expandedArray });
  }

  const handleCategoryInput = (key, value, index, type) => {
    console.log(value);
    if (type == "checked") {
        const updatedCheckedArray = checkedArray.map((item, _index) =>
            index == _index ? { ...item, [key]: value } : item);
        setCheckedArray(updatedCheckedArray);
    } else if (type == "expanded") {
        const updatedExpandedArray = expandedArray.map((item, _index) =>
            index == _index ? { ...item, [key]: value } : item);
        setExpandedArray(updatedExpandedArray);
    }
}


  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col mb={12}>
            {/* <ul>
              {renderCategories(category.categories)}
            </ul> */}
            <CheckboxTree
              nodes={renderCategories(category.categories)}
              checked={checked}
              expanded={expanded}
              onCheck={checked => setChecked(checked)}
              onExpand={expanded => setExpanded(expanded)}
              icons={{
                check: <IoIosCheckbox />,
                uncheck: <IoIosCheckboxOutline />,
                halfCheck: <IoIosCheckboxOutline />,
                expandClose: <IoIosArrowForward />,
                expandOpen: <IoIosArrowDown />
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <button>Delete</button>
            <button onClick={updateCategory}>Edit</button>
          </Col>
        </Row>
      </Container>
      <Modal show={show} handleClose={handleClose}
        modalTitle={"Add New Category"}
      >
        <Input

          placeholder="Enter Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <select className="form-control"
          value={parentCategoryId}
          onChange={(e) => setParentCategoryId(e.target.value)}
        >
          <option>
            Select category
             </option>
          {
            createCategoryList(category.categories).map(option =>
              <option key={option.value} value={option.value} >{option.name}</option>)
          }
        </select>
        <input type="file" name="categoryImage" onchange={handleCategoryImage} />


      </Modal>
      {/* Edit categories */}

      <Modal
        show={updateCategoryModal}
        handleClose={() => setUpdateCategoryModal(false)}
        modalTitle={"Update Categories"}
        size="lg"
      >
        <Row>
          <Col>
            <h6>Expanded</h6>
          </Col>
        </Row>
        {
          expandedArray.length > 0 &&
          expandedArray.map((item, index) =>

            <Row key ={index}>
              <Col>
                <Input

                  placeholder="Category Name"
                  value={item.name}
                  onChange={(e) => handleCategoryInput("name" , e.target.value , index , "expanded")}
                />
              </Col>
              <Col>
                <select className="form-control"
                  value={item.parentId}
                  onChange={(e) => handleCategoryInput("parentId" , e.target.value , index , "expanded")}
                >
                  <option>
                    Select category
             </option>
                  {
                    createCategoryList(category.categories).map(option =>
                      <option key={option.value} value={option.value} >{option.name}</option>)
                  }
                </select>
              </Col>

              <Col>
                <select
                  className="form-control"
                >
                  <option value="">Select Type</option>
                  <option value="store">Store</option>
                  <option value="product">Product</option>
                  <option value="page">Page</option>
                </select>
              </Col>
            </Row>

          )
        }
        {
          checkedArray.length > 0 &&
          checkedArray.map((item, index) =>

            <Row key ={index}>
              <Col>
                <Input

                  placeholder="Category Name"
                  value={item.name}
                  onChange={(e) => handleCategoryInput("name" , e.target.value , index , "checked")}
                />
              </Col>
              <Col>
                <select className="form-control"
                  value={item.parentId}
                  onChange={(e) => handleCategoryInput("parentId" , e.target.value , index , "checked")}
                >
                  <option>
                    Select category
             </option>
                  {
                    createCategoryList(category.categories).map(option =>
                      <option key={option.value} value={option.value} >{option.name}</option>)
                  }
                </select>
              </Col>

              <Col>
                <select
                  className="form-control"
                >
                  <option value="">Select Type</option>
                  <option value="store">Store</option>
                  <option value="product">Product</option>
                  <option value="page">Page</option>
                </select>
              </Col>
            </Row>

          )
        }



      <input type="file" name="categoryImage" onchange={handleCategoryImage} />


      </Modal>

    </Layout>
  )

}

export default Category