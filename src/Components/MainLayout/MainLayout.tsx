import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About"
import Review from "../Review/Review";
import Pricing from "../Pricing/Pricing";
import Footer from "../Footer/Footer";
export default function MainLayout() {
    return (
        <>
            <div className="my-auto  mx-auto">
                <Navbar />
                <Home />
                <About />
                <Pricing />
                <Review />
                <Footer />
            </div>
        </>
    )
}