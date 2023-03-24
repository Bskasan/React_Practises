import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const url = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const getProducts = async () => {
    console.log("merhaba");
    try {
      const { data } = await axios(url);
      setProducts(data);
      setLoading(false); //? try a girdiğinde loadingi false a çek diyorum ki sonucu bilebileyim
      setErrorState(false); //? işlem başarılı olursa erroru falsea çekiyorum
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrorState(true); //? catche düştüğünde errorstate ini true değerine çeviriyorum
    }
  };

  //? componentDidMount
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-3">
      <div className="bg-light d-sm-block d-md-flex">
        {loading ? (
          <p className="text-center text-danger w-100">Loading...</p>
        ) : products.length > 0 ? (
          <>
            <article id="product-panel" className="col-md-5">
              <ProductCard />
            </article>
            <article className="col-md-5 m-3">
              <CardTotal />
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}
        {errorState && (
          <p className="text-center text-danger w-100">Error...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
