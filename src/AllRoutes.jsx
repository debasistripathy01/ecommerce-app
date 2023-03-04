import React, { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import { Homepage } from './Components/Homepage';
import { ProductsPage } from './Components/Productpage';
import Searchpage from './Components/Searchpage';

const AllRoutes = () => {
    const [searchValue, setSearchValue] = useState('');

    const history = useNavigate();

//   const handleSearch = () => {
//     history.push(`/search?q=${searchValue}`);
//   };
  return (
    <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='products/:categoryName' element={<ProductsPage />} />
        {/* <Route path='/products/:categoryName' element={<ProductsPage />}/> */}
        <Route path='/search' element={<Searchpage />}/>
    </Routes>
  )
}

export default AllRoutes