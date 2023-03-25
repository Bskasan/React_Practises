import axios from "axios";
import React, { useState } from "react";
import ProductForm from "../components/ProductForm";

//? Initial State Object
const initialState = {
  name: "",
  image: "",
  price: "",
  dampingRate: 0.8,
  amount: 1,
};

const NewProduct = () => {
  const url = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState(initialState);

  handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    //! change eventının gerçekleştiği inputtaki id attribute u ile formDatamdaki key değerlerim aynı olduğu için dinamik bir şekilde formData mı güncelleybiliyorum
    console.log({ [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, formData);
      setFormData(initialState);
    } catch (error) {}
  };

  return (
    <div className="container">
      <ProductForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default NewProduct;
