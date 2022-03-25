import React from "react";
import About from "../components/sections/About";
import Blog from "../components/sections/Blog";
import Header from "../components/sections/Header";
import Protofolio from "../components/sections/Protofolio";
import Resume from "../components/sections/Resume";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Resume />
            <Protofolio />
            <Blog />
        </>
    )
}

export default Home;