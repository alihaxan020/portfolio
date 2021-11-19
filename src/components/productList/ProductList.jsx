import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-lists">
        {products.map((item) => (
          <Product key={item.id} image={item.image} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
