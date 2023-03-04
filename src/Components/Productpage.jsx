import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

function ProductsPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  }, [categoryName]);
  console.log("category Name :", categoryName)
  console.log("Products Name :", products)
  return (
    <Box py={10}>
        <Navbar />
      <Text fontSize="4xl" fontWeight="bold" mb={10}>
         {categoryName}
      </Text>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
      >
        {products?.map((product) => (
          <Box key={product.id} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" p={4}>
            <Image src={product.thumbnail} alt={product.title} mb={4} />
            <Text fontWeight="bold" fontSize="xl" mb={2}>
              {product.title}
            </Text>
            <Text mb={2}>{product.description}</Text>
            <Text fontWeight="bold" fontSize="lg">
              ${product.price}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export  {ProductsPage};
