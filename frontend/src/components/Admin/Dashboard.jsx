import React from 'react'
import { getAdminProduct } from '../../actions/productAction';
import { getAllUsers } from '../../actions/userAction';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
 
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllUsers(user));
    }, [dispatch]);
     const { users } = useSelector((state) => state.allUsers);
    console.log(users);
    
    const navigate = useNavigate();

  
  return (
    <div>
      {user.role}
      {users[0].email}
 
    </div>
  )
}

export default Dashboard


    // const { users } = useSelector((state) => state.allUsers);


    
    // const { products } = useSelector((state) => state.products);
  
    // const { orders } = useSelector((state) => state.allOrders);
  
    
  //  console.log(users)
  //   useEffect(() => {
  //       dispatch(getAdminProduct());
  //       // dispatch(getAllOrders());
  //       dispatch(getAllUsers());
  //     }, [dispatch]);
  //     const { users } = useSelector((state) => state.allUsers);
  //     console.log(users)