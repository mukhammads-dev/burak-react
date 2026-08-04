// SLICE jarayoni backend datani store Reduxga joylash 

import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";

const initialState: OrdersPageState = { // REDUCER 
    pausedOrders: [], // backendan data yoq bolsa 
    processOrders: [],     // Reducer uchun initial state bolishi kerak
    finishedOrders: [],      // qandaydur malumot app crash bolmasligi uchun
};

const ordersPageSlice = createSlice({
    name: "orderPage",
    initialState, // backendan data kelguncha boshlangich statelar shular

    reducers: {  // SLICE eng katta qismi REDUCER lar =>
        setPausedOrders: (state, action) => {
            state.pausedOrders = action.payload; // unga malumotni ACTION payload qismida olib keladi
        },                                        // va reducer stateni yangilaydi
        setProcessOrders: (state, action) => {
            state.processOrders = action.payload;
        },
        setFinishedOrders: (state, action) => {
            state.finishedOrders = action.payload;
        },
    },
});

// Reducer ga data olib kelgan Actiondi tashqariga export qilamiz
export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    ordersPageSlice.actions;

// va REDUX ga qoshish uchun bu yordamga keladi
const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer 