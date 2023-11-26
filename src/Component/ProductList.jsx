import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import { SimpleGrid } from "@chakra-ui/react";
import MyLottieAnimation from "./MyLottieAnimation";
import { useLocation, useSearchParams } from "react-router-dom";
const ProductList = () => {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const dispatch = useDispatch();
  const {products} = useSelector((store)=>store.ProductReducer)
  let arr = [1,2,3,4,5,6,7,8,9]
  console.log(products)

  let obj = {
    params : {
      category:searchParams.getAll("category")
    }
  }

  console.log(location)
  useEffect(() => {
    dispatch(getProduct (obj) )
   
    console.log(products)
  }, [location.search]);

  return <>
  <SimpleGrid columns={[1, 1, 3]} spacing={10}>
  {products.length >0 ? products.map((el)=> <ProductCard key = {el.id}  el={el} />  ) : arr.map((el)=> <MyLottieAnimation key={el} />)   /* Used Optional Chaining --> ?.map */ }   ;
  </SimpleGrid>
  </> 
};

export default ProductList;
