import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/Products/productActions';

const Products = () => {

   const product = useSelector(state => state.product);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(
         setProducts([
            { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
            { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
            { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
            { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
            { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
            { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
         ])
      )
   }, [])


   return (
      <>
         <h3>{JSON.stringify(product.PRODUCTS)}</h3>
      </>
   )
}

export default Products
