
import axios from "axios";



export const getAllProducts = () => async (dispatch) => {
    console.log("product")
    try {
        // dispatch({ type: "ALL_PRODUCT_REQUEST" }); // Use the correct action type here
        const { data } = await axios.get('http://localhost:5000/api/v1/products');
        console.log(data);

      dispatch({
        type: "ALL_PRODUCT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
