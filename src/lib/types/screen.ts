import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

// Redux qurish type integratsiyadan boshlanadi
/** Butun application type integratsiyasiga javob beradi  **/


/** REACT APP STATE */
export interface AppRootState { // bizni butun Applicationimiz =>
    homePage: HomePageState; // Homepagedan iborat
    productsPage: ProductsPageState;
    ordersPage: OrdersPageState;
    // ordersPage:  // Orders pagedan iborat...
}
/** HOMEPAGE */
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
    // statistics => modif loyihada ozimiz quramiz
    // events

}

/** PRODUCTS PAGE */
export interface ProductsPageState {
    restaurant: Member | null;
    chosenProduct: Product | null;
    products: Product[];

}


/** ORDERS PAGE */
export interface OrdersPageState {
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
}