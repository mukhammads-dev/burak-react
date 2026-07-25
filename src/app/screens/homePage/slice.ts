// SLICE jarayoni backend datani store Reduxga joylash 

import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = { // REDUCER 
    popularDishes: [], // backendan data yoq bolsa 
    newDishes: [],     // Reducer uchun initial state bolishi kerak
    topUsers: [],      // qandaydur malumot app crash bolmasligi uchun
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState, // backendan data kelguncha boshlangich statelar shular

    reducers: {  // SLICE eng katta qismi REDUCER lar =>
        setPopularDishes: (state, action) => {
            state.popularDishes = action.payload; // unga malumotni ACTION payload qismida olib keladi
        },                                        // va reducer stateni yangilaydi
        setNewDishes: (state, action) => {
            state.newDishes = action.payload;
        },
        setTopUsers: (state, action) => {
            state.topUsers = action.payload;
        },
    },
});

// Reducer ga data olib kelgan Actiondi tashqariga export qilamiz
export const { setPopularDishes, setNewDishes, setTopUsers } =
    homePageSlice.actions;

// va REDUX ga qoshish uchun bu yordamga keladi
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer