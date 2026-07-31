import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footers";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import HelpPage from "./screens/helpPage";
import Test from "./screens/Test";
import { CartItem } from "../lib/types/search";

function App() {
  const location = useLocation();

  // basket bilan ishlash uchun business mantiq
  // 1. localStorage'dan avval saqlangan savatcha ma'lumotlarini o'qib olamiz
  const cartJson: string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : [];

  // 2. React state'ni localStorage'dan kelgan ma'lumot bilan boshlaymiz
  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);

  /** HANDLERS **/

  const onAdd = (input: CartItem) => {
    // 3. Qo'shilayotgan mahsulot savatchada oldindan bor-yo'qligini ID bo'yicha qidiramiz
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );

    if (exist) {
      // 4. Mahsulot allaqachon bor bo'lsa, uni topib faqat sonini (quantity) 1 ga oshiramiz
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );

      // State va localStorage'ni yangilaymiz
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      // 5. Mahsulot bo'lmasa, uni yangi element sifatida savatcha massiviga qo'shamiz
      const cartUpdate = [...cartItems, { ...input }];

      // State va localStorage'ni yangilaymiz
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  return <>
    {location.pathname === "/" ? <HomeNavbar cartItems={cartItems} /> : <OtherNavbar cartItems={cartItems} />}
    <Switch>
      <Route path="/products">
        <ProductsPage onAdd={onAdd} />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/member-page">
        <UserPage />
      </Route>
      <Route path="/help">
        <HelpPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    <Footer />
  </>
}



export default App;





