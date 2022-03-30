import React from "react";
import About from "../components/sections/About";
import Blog from "../components/sections/Blog";
import Header from "../components/sections/Header";
import Portfolio from "../components/sections/Portfolio";
import Resume from "../components/sections/Resume";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Resume />
            <Portfolio />
            <Blog />
        </>
    )
}

export default Home;