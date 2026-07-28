
// SELECTORLAR datani lyuboy joyda call qilish uchun yordamga keladi

import { createSelector } from "reselect"; // bu malumotni olish uchun
import { AppRootState } from "../../../lib/types/screen";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retrieveRestaurant = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.restaurant
);


export const retrieveChosenProduct = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.chosenProduct
);

export const retrieveProducts = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.products
);