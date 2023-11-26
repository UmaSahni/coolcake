import { Box, Checkbox, HStack, Radio, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  let [category, setCategory] = useState([]);

  // console.log(location)

  const handleChange = (e) => {
    let filterItem = e.target.value;

    // Check if array already has that element. If it has, then {REMOVE} it else {ADD} it
    if (category.includes(filterItem)) {
      setCategory(category.filter((el) => el !== filterItem));
    } else {
      setCategory([...category, filterItem]);
    }
  };

  useEffect(() => {
    let params = { category };
    // console.log(params, "This is params");
    setSearchParams(params);
  }, [category]);

  return (
    <div>
      {/* -----------Filter Functionality---------- */}
      <Box m={10}>
        <Text align={'center'} fontWeight={'bold'}>
          Filter By
        </Text>
        <VStack align={'left'}>
          <Checkbox value="Chocolate" onChange={handleChange}>
            Chocolate Cake
          </Checkbox>
          <Checkbox value="special" onChange={handleChange}>
            Special Cake
          </Checkbox>
          <Checkbox value="cream" onChange={handleChange}>
            Cream Cake
          </Checkbox>
        </VStack>
      </Box>

      {/* ----------Sort Functionality------------ */}
      <Box m={10}>
        <Text align={'center'} fontWeight={'bold'}>
          Sort By
        </Text>
        <VStack align={'left'}>
          <Radio value="asc">Low to high</Radio>
          <Radio value="desc">High to low</Radio>
        </VStack>
      </Box>
    </div>
  );
};

export default Sidebar;
