import React from "react";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Service from "../components/Service";
import CustomerReviews from "../components/CustomerReviews";

const Home = () => {
    return (
        <div>
            <Banner />
            <Product />
            <Service />
            <CustomerReviews />
        </div>
    )
}


export default Home;