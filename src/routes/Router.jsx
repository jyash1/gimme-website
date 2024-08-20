import ProductDetails from "components/views/Product-details/product-details";
import HeaderSecond from "components/views/second-page/header";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export const Router = () => {
    return (
        <div>
            <BrowserRouter basename="/web">
                <Routes>
                    <Route path="/" element={<HeaderSecond />}></Route>
                    <Route path="/product-details/:id" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
