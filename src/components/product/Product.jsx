import React from "react";
import "./product.css";
const Product = ({ image, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferer">
        <img src={image} alt="" className="p-image" />
      </a>
    </div>
  );
};

export default Product;
