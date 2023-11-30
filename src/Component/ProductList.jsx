import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProduct } from "../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import { Box, Button, Flex, SimpleGrid , Text} from "@chakra-ui/react";
import MyLottieAnimation from "./MyLottieAnimation";
import { useLocation, useSearchParams } from "react-router-dom";
const ProductList = () => {
  let [page, setPage] = useState(1)
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const dispatch = useDispatch();
  const {products} = useSelector((store)=>store.ProductReducer)
  let arr = [1,2,3,4,5,6]
  console.log(products)

  // Last page for Pagination
 const {AllproductCount} = useSelector((store)=>store.ProductReducer)

 // 

 const lastPage = Math.ceil(AllproductCount/6)

 console.log(lastPage, "This is last page")
  
  let obj = {
    params : {
      category:searchParams.getAll("category"),
     _limit:6,
      _page : page,
      // Sort
      _sort:"price.mrp_inr",
      _order:searchParams.get("order")
    }
  }

  console.log(location)
  useEffect(() => {
    dispatch(getProduct (obj) )
    
    console.log(products)
  }, [location.search, page]);

  return <>
  <SimpleGrid columns={{ base: 1, mobile: 2,  tablet:2 ,lg: 3,   }}>
  {products.length >0 ? products.map((el)=> <ProductCard key = {el.id}  el={el} />  ) : arr.map((el)=> <MyLottieAnimation key={el} />)   /* Used Optional Chaining --> ?.map */ }   ;
  </SimpleGrid>

{/* Pagination */}
<Box mb={5} >
  <Flex margin={'auto'} gap={"10px"} justifyContent={"center"}  > 
    <Button colorScheme='pink' variant='outline' isDisabled={ page === 1 } onClick={()=>setPage(page-1)}  >Pre</Button> 
    <Button colorScheme='pink' variant='outline'  >{page}</Button>
    <Button colorScheme='pink' variant='outline' isDisabled={ page === lastPage } onClick={()=>setPage(page+1)} >Next</Button>
  </Flex>
</Box>
  </> 
};

export default ProductList;
