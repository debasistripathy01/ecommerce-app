import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Switch } from '@chakra-ui/react'
import { Homepage } from './Components/Homepage'
import {useHistory} from "react-router-dom"
import { Productpage } from './Components/Productpage'
import Searchpage from './Components/Searchpage'

const AllRoutes = () => {

    const [searchValue, setSearchValue] = useState("");
    const history = useHistory();
    const handleSearch = () => {
        history.push(`/search?q=${searchValue}`);
      };
  return (
    <div>
    <Navbar onSearchChange={setSearchValue} onSearchSubmit={handleSearch} />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/category/:categoryName">
          <Productpage />
        </Route>
        <Route path="/search">
          <Searchpage searchValue={searchValue} />
        </Route>
      </Switch>

    </div>
  )
}

export default AllRoutes