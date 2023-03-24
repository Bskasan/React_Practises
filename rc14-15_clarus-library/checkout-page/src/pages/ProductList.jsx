import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const ProductList = () => {
    const url = process.env.REACT_APP_API_URL;
    console.log("url", url);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      try {
        const { data } = await axios("");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-3">
      <div className="bg-light d-sm-block d-md-flex">
        <p className="text-center text-danger w-100">Loading...</p>
        <>
          <article id="product-panel" className="col-md-5">
            <ProductCard />
          </article>
          <article className="col-md-5 m-3">
            <CardTotal />
          </article>
        </>
        <p className="text-center text-danger w-100">No products data...</p>
      </div>
    </div>
  );
};

export default ProductList;
