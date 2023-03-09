import ProductCard from "../productSlider";
import { offersPro } from "../../services/offersProducts";
import "./style.css";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/axios";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const ProductTabs = (props) => {
  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);
  const error = useSelector(state => state.productsReducer.error);

  useEffect(() => {
    dispatch(fetchProducts())
    // getApiData()
    //   .then((resp) => {
    //     console.log("API DATA => ", resp);
    //     setApiData(resp.data)
    //   })
    //   .catch((err) => {
    //     console.log("API DATA ERR => ", err);
    //   });
    // const fetchData = async () => {
    //   const response = await axios.get('https://fakestoreapi.com/products');
    //   setApiData(response.data);
    // };

    // fetchData();
  }, [dispatch]);
  console.log("API DATA REDUX", products);
  console.log("offersPro", offersPro);

  return (
    <ProductCard slides={products} />
  );
}

export default ProductTabs;
