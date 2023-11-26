import { Box, Center, Divider, Heading } from "@chakra-ui/react";
import React from "react";
import Hero from "../Component/Hero";
import Category from "../Component/Category";
import Sidebar from "../Component/Sidebar";




const Home = () => {
  return (
    <div>
       <Hero/>
     <Category/>
     
      
    </div>
  );
};

export default Home;
