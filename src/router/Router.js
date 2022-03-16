import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/item-list-container/ItemListContainer";
import NavBar from "../components/navbar/NavBar";
import NotFound from "../components/not-found/NotFound";
import ItemDetailContainer from "../components/item-detail-container/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import Footer from "../components/footer/footer";
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
