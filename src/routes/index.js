import React, { Suspense, useLayoutEffect} from "react"
import {Routes, Route} from "react-router-dom"
import Category from "../pages/Category";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Pages = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/content/:slug/:id" element={<Detail />} />
                <Route path="/category/:slug/:id" element={<Category />} />
            </Routes>
        </Suspense>
    )
}

export default Pages