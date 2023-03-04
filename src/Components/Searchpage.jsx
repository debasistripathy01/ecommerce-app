import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar';
import { useLocation } from "react-router-dom";
import { Box, Button, Input } from "@chakra-ui/react";

const Searchpage = () => {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const location = useLocation();

    async function handleSearch() {
        try {
          const response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
          const data = await response.json();
          
        } catch (error) {
          console.log(error);
        }
      }
      
      
      
      
      
      
      

    useEffect(()=>{
        const handleSearch = () => {
        axios
        .get(`https://dummyjson.com/products/search?q=${searchValue}`)
        .then((response) => setProducts(response.data.products))
        .catch((error) => console.error(error));
        }
    }, [searchValue])

    
  return (
    <Box>
      <h1>Search Products</h1>
      <Box>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for products..."
          mr="4"
        />
        <Button onClick={handleSearch} colorScheme="teal">
          Search
        </Button>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="4">
        {products?.map((product) => (
          <Box key={product.id} boxShadow="lg" p="4">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Searchpage