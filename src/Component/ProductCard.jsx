"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { addCart } from "../Redux/CartReducer/action";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";



function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

// --------- Main Function Starts from here -------------

function ProductCard({ el }) {
  const { image, quantity, name, price, description, rating, category, review_count, rating_count, id, sdesc,tagBeforeCutoff,eggless } = el;
  
  const INR_PRICE = price.mrp_inr;  // Taking out price from object because react dom dosen't support object
 
  // initializing navigate hook to go on single edit page
  const navigate = useNavigate() 

  // Some React-Redux hooks
  const dispatch = useDispatch()
  const { AuthReducer } = useSelector((store) => store);

  const userData = AuthReducer["data"];
  const userId = userData["id"]; // Current user Id
  

  // Add to cart functionality
 const addtoCart = () => {
    // Check if the user is Autherized
    if (!userId) {
      toast.error(<b>Please Login</b>);
      return 
    }

    const main = {
      category,
      image,
      name,
      eggless,
      quantity,
      rating,
      sdesc,
      tagBeforeCutoff,
      price,
      userId,
    };

    dispatch(addCart(main));
  };

  return (
    <>
    <Toaster/>
    <Flex p={50} w="full" alignItems="center" justifyContent="center"  >
      
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="250"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
      

        <Image
          src={`https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/${image}`}
          alt={`Picture of ${name}`}
          roundedTop="lg"
          onClick={() => navigate(`/product/${id}`)}
        />

        <Box p="6">

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Box onClick={addtoCart} >
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra  display={"flex"}>
                <Icon  as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra>
            </Tooltip>
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={rating_count } numReviews={review_count} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                ₹
              </Box>
              {INR_PRICE}
            </Box>
          </Flex>
        </Box>
        
       
      </Box>
    </Flex>
    </>
  );
}

export default ProductCard;
