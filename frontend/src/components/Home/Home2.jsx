import React, { useEffect } from 'react'
import { getAllProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from 'react-redux';
import Products from '../Product/Products';



const Home2 = () => {
  // getAllProducts();
  const { products } = useSelector((state) => state.products )

  // console.log("product ::",product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      {products && products.map(product => {
        <Products product={product} />
      })}
    </div>
  )
}

export default Home2
