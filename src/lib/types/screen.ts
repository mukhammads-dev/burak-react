import { Member } from "./member";
import { Product } from "./product";
/** Butun application type integratsiyasiga javob beradi  **/


/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    // productsPage: ProductsPageState;
}
/** HOMEPAGE */
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];

}

/** PRODUCTS PAGE */


/** ORDERS PAGE */