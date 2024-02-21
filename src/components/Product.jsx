import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/">Go to Dashboard</Link>
    </div>
  );
}

export default Product;
