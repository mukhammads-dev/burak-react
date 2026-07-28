// SLICE jarayoni backend datani store Reduxga joylash 

import { createSlice } from "@reduxjs/toolkit";
import { HomePageState, ProductsPageState } from "../../../lib/types/screen";

const initialState: ProductsPageState = { // REDUCER 
    restaurant: null, // backendan data yoq bolsa 
    chosenProduct: null,     // Reducer uchun initial state bolishi kerak
    products: []   // qandaydur malumot app crash bolmasligi uchun
};

const productsPageSlice = createSlice({
    name: "productsPage",
    initialState, // backendan data kelguncha boshlangich statelar shular

    reducers: {  // SLICE eng katta qismi REDUCER lar =>
        setRestaurant: (state, action) => {
            state.restaurant = action.payload; // unga malumotni ACTION payload qismida olib keladi
        },                                        // va reducer stateni yangilaydi
        setchosenProduct: (state, action) => {
            state.chosenProduct = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

// Reducer ga data olib kelgan Actiondi tashqariga export qilamiz
export const { setRestaurant, setchosenProduct, setProducts } =
    productsPageSlice.actions;

// va REDUX ga qoshish uchun bu yordamga keladi
const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer