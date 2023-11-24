import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../apiEndPoints";
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
  name: "",
  price: "",
  description: "",
  quantity: "",
  rating: "",
  category: "",
  image:"",
};

const AddProduct = () => {
  const [cake, setCake] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCake(pre=>({...cake, [name]:value}))
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    // Display loading notification
    const loadingnoti = toast.loading("...loading")
    axios.post(`${BASE_URL}/cakes`, cake)
    .then((res)=>{
    // Close the loading notification
    toast.dismiss(loadingnoti)

    // Display success notification
    toast.success(<b>Added successful!</b>)
        console.log(res)
    })
    .catch((err)=>{
      toast.dismiss(loadingnoti)
      
    // Display error notification
    toast.error(<b>Unable to add product. Please try later.</b>);
        console.err(err, "Error in Addproduct")
    })
    setCake(initialState)
    console.log(cake)
  };


  return (
    <div>
      <Toaster/>
      <Container maxW="container.sm">
        <form onSubmit={handleSubmit} >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input  onChange={handleChange} state={cake.name} name="name"  />
            </FormControl>

            <FormControl>
              <FormLabel>Product Description</FormLabel>
              <Textarea onChange={handleChange} state={cake.description} name="description" ></Textarea>
            </FormControl>

            <FormControl>
            <FormLabel>Product Image</FormLabel>
            <Input
              onChange={handleChange}
              name="image"
            />
          </FormControl>

             <FormControl>
              <FormLabel>Product Price</FormLabel>
            <NumberInput min={0}>
                <NumberInputField onChange={handleChange} state={cake.price} name="price"  />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Product Quantity</FormLabel>
              <NumberInput min={0}>
                <NumberInputField onChange={handleChange} state={cake.quantity} name="quantity"  />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Product Rating</FormLabel>
              <NumberInput  min={0} max={5}>
                <NumberInputField onChange={handleChange} state={cake.rating} name="rating" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Select onChange={handleChange} state={cake.category} name="category" placeholder="Select Cake type">
              <option value="Chocolate Cakes">Chocolate Cakes</option>
              <option value="Cream Cakes">Cream Cakes</option>
              <option value="Special Cakes">Special Cakes</option>
            </Select>


          </Stack>
          <Button type="submit" >Submit</Button>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
