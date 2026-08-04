
// SELECTORLAR datani lyuboy joyda call qilish uchun yordamga keladi

import { createSelector } from "reselect"; // bu malumotni olish uchun
import { AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrders = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.pausedOrders
);


export const retrieveNewDishes = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.processOrders
);

export const retrieveTopUsers = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.finishedOrders
); 