import React from 'react'
import { Flex, Image } from "@chakra-ui/react";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
    

// import { unstable_HistoryRouter, useHistory } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <>
        <Flex
        bg="teal"
        color={"white"}
        align="center"
        justify="space-between"
        px={["1", "1", "7", "10"]}
        fontSize={["14px", "14px", "19px", "20px"]}
        py="4"
        >
            
                <Link to="/">Home</Link>
            
                <Link to="/category/electronics" />
            
                <Link to="/category/clothing" />
           
                {/* <form onSubmit={onSearchSubmit}>
                    <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
                    <button type="submit">Search</button>
                </form> */}
                <Link to="/search" >Search</Link>
        </Flex>
    </>
  )
}

export { Navbar }