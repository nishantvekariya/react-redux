import axios from "axios";
import * as actionTypes from "../redux/reducers/cart-types"

export const getApiData1 = async () => {
    try {
        const resp = await axios.get('https://fakestoreapi.com/products');
        return resp.data;
    } catch (err) {
        console.log(err);
    }
}

export const getApiData = () => axios({
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
});

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log("resp", response.data);
        dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: actionTypes.FETCH_PRODUCTS_ERROR, payload: error.message });
    }
};