import React from "react";
//import { BiRupee } from "react-icons/io";

/**
 * @author
 * @function Price
 **/

const Price = (props) => {
  return (
    <div
      style={{
        fontSize: props.fontSize ? props.fontSize : "14px",
        fontWeight: "bold",
        margin: "5px 0",
      }}
    >
      {/* <BiRupee /> */}
      {props.value}
    </div>
  );
};

export default Price;