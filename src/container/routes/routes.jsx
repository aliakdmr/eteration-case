import React from "react";
import './routes.scss';
import { Routes, Route } from "react-router-dom";
import Product from "../products/product";
import ProductDetail from "../productDetail/productDetail";



function RouteLinks () {



    return (
        <div className="routes-container" >
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/urun-detay:detail" element={<ProductDetail />} />
            </Routes>
        </div>
    );
}
export default RouteLinks;
