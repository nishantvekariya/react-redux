import * as actionTypes from "./cart-types";

const initialState = {
    products: [],
    error: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, error: null };
        case actionTypes.FETCH_PRODUCTS_ERROR:
            return { ...state, products: [], error: action.payload };
        default:
            return state;
    }
};

export default productsReducer;