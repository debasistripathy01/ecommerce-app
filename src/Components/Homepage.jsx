import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Box, Grid, Heading } from '@chakra-ui/react';

const Homepage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [categories, setCategories] = useState([]);
    const history = useNavigate();

    const handleSearch = () => {
        history(`/search?q=${searchValue}`);
      };
      
      useEffect(() => {
        axios
          .get('https://dummyjson.com/products/categories')
          .then((response) => setCategories(response.data))
          .catch((error) => console.error(error));
      }, []);

      const handleCategoryClick = (categoryName) => {
        localStorage.setItem('category', categoryName);
        history(`/products/${categoryName}`);
      };
    

  return (
    <div>
        <Navbar onSearchChange={setSearchValue} onSearchSubmit={handleSearch} />
        <Box p="4">
        <Heading as="h1" mb="4">
            Categories
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap="4">
            {categories.map((category) => (
            <Box
                key={category}
                p="4"
                border="1px"
                borderColor="gray.200"
                borderRadius="md"
                cursor="pointer"
                onClick={() => handleCategoryClick(category)}
            >
                <Heading as="h2" size="md" mb="2">
                {category}
                </Heading>
            </Box>
            ))}
        </Grid>
        </Box>
    </div>
  )
}

export {Homepage}