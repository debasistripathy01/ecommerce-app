import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Productpage = () => {


    const {categoryName} = useParams()
    const [ productName, setProductNames] = useState([])

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products/category/${categoryName}`)
        .then((response) => setProductNames(response.data))
        .catch((error) => console.error(error));
    }, [categoryName])
  return (
    <div>

    </div>
  )
}

export {Productpage}