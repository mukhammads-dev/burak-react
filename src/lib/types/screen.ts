import { Member } from "./member";
import { Product } from "./product";

// Redux qurish type integratsiyadan boshlanadi
/** Butun application type integratsiyasiga javob beradi  **/


/** REACT APP STATE */
export interface AppRootState { // bizni butun Applicationimiz =>
    homePage: HomePageState; // Homepagedan iborat
    // productPage: // Product pagedan iborat
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


/** ORDERS PAGE */