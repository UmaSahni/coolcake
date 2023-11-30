import { Box, Checkbox, HStack, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Sidebar = () => {
  let [searchParams, setSearchParams] = useSearchParams(); // This is a way were you have variable that you can not skip then you can use undersore

  let [category, setCategory] = useState( searchParams.getAll("category")  || []);
  let [sort, setSort] = useState(searchParams.get("order"|| ""))

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

  // Sort

  const handleClick = (e) =>{
    // setSort(e.target.value)
  }

  useEffect(() => {
    let params = { category };
    // console.log(params, "This is params");

    // Check sort is present or not other wise it will show sort=
    sort && (params.order = sort)
    setSearchParams(params);
  }, [category, sort]);

  return (
    <div>
      {/* -----------Filter Functionality---------- */}
      <Box m={10}>
        <Text align={'center'} fontWeight={'bold'}>
          Filter By
        </Text>
        <VStack align={'left'}>
          <Checkbox isChecked={category.includes("Chocolate")} value="Chocolate" onChange={handleChange}>
            Chocolate Cake
          </Checkbox>
          <Checkbox isChecked={category.includes("special")} value="special" onChange={handleChange}>
            Special Cake
          </Checkbox>
          <Checkbox isChecked={category.includes("cream")} value="cream" onChange={handleChange}>
            Cream Cake
          </Checkbox>
        </VStack>
      </Box>

      {/* ----------Sort Functionality------------ */}
      <Box m={10}>
        <Text align={'center'} fontWeight={'bold'}>
          Sort By
        </Text>
          <RadioGroup onChange={setSort} value={sort} >
        <VStack  align={'left'}>
          <Radio name="order" value="asc">Low to high</Radio>
          <Radio name="order" value="desc">High to low</Radio>
        </VStack>
          </RadioGroup>
      </Box>
    </div>
  );
};

export default Sidebar;
