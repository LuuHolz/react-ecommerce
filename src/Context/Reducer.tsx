// src/reducer/shoppingReducer.js

const shoppingReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_ITEMS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default shoppingReducer;
