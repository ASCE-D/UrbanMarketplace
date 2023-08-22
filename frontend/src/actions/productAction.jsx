
import axios from "axios";
import { useParams } from "react-router-dom";


export const getAllProducts = () => async (dispatch) => {
    // console.log("product")
    try {
        dispatch({ type: "ALL_PRODUCT_REQUEST" }); // Use the correct action type here
        const { data } = await axios.get('http://localhost:5000/api/v1/products');
        // console.log(data);

      dispatch({
        type: "ALL_PRODUCT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const getProductDetails = (id) => async (dispatch) => {
     console.log(id);
    try {
      dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
  
      const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
      console.log(data.product);
  
      dispatch({
        type: "PRODUCT_DETAILS_SUCCESS",
        payload : data.product,
      });
    } catch (error) {
      // dispatch({
      //   type: PRODUCT_DETAILS_FAIL,
      //   payload: error.response.data.message,
      // });
      console.log(error.message);
    }
  };