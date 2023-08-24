import React from 'react'
import { getAdminProduct } from '../../actions/productAction';
import { getAllUsers } from '../../actions/userAction';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
const Dashboard = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
  
    const { orders } = useSelector((state) => state.allOrders);
  
    const { users } = useSelector((state) => state.allUsers);

    useEffect(() => {
        dispatch(getAdminProduct());
        // dispatch(getAllOrders());
        dispatch(getAllUsers());
      }, [dispatch]);
      console.log(users)
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
