import { Box, Checkbox, HStack, Radio, RadioGroup, Text, VStack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IoFilter } from "react-icons/io5";
const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.getAll("category") || []);
  const [sort, setSort] = useState(searchParams.get("order" || ""));

  const handleChange = (e) => {
    let filterItem = e.target.value;

    if (category.includes(filterItem)) {
      setCategory(category.filter((el) => el !== filterItem));
    } else {
      setCategory([...category, filterItem]);
    }
  };

  useEffect(() => {
    let params = { category };

    sort && (params.order = sort);
    setSearchParams(params);
  }, [category, sort]);

  const renderSidebarContent = () => (
    <>
      {/* Filter Functionality */}
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

      {/* Sort Functionality */}
      <Box m={10}>
        <Text align={'center'} fontWeight={'bold'}>
          Sort By
        </Text>
        <RadioGroup onChange={setSort} value={sort}>
          <VStack align={'left'}>
            <Radio name="order" value="asc">Low to high</Radio>
            <Radio name="order" value="desc">High to low</Radio>
          </VStack>
        </RadioGroup>
      </Box>
    </>
  );

  return (
    <div>
      {/* Desktop View */}
      <Box display={{ base: 'none', xl: 'block' }}>
        {renderSidebarContent()}
      </Box>

      {/* Tablet and Mobile View */}
      <Box  display={{ base: 'block', xl: 'none' }}>
        <HStack m={5} >
          <Box onClick={onOpen} cursor="pointer">
            <Text fontWeight={"bold"} fontSize={"small"} >Filter</Text>
           <IoFilter size={30} /> 
          </Box>
        </HStack>
        <Drawer     placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent backgroundColor="pink" >
              <DrawerCloseButton />
              <DrawerHeader>Filter and Sort</DrawerHeader>
              <DrawerBody>
                {renderSidebarContent()}
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </div>
  );
};

export default Sidebar;
