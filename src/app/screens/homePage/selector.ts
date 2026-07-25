
// SELECTORLAR datani lyuboy joyda call qilish uchun yordamga keladi

import { createSelector } from "reselect"; // bu malumotni olish uchun
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.popularDishes
);


export const retrieveNewDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topUsers
);