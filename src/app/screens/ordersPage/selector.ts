
// SELECTORLAR datani lyuboy joyda call qilish uchun yordamga keladi

import { createSelector } from "reselect"; // bu malumotni olish uchun
import { AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrders = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.pausedOrders
);


export const retrieveProcessOrders = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.finishedOrders
); 