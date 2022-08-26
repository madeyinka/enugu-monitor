import React, { Suspense, useLayoutEffect} from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home";

const Pages = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Suspense>
    )
}

export default Pages