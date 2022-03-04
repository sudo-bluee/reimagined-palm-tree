import React from "react";
import About from "../components/sections/About";
import Blog from "../components/sections/Blog";
import Header from "../components/sections/Header";
import Protofolio from "../components/sections/Protofolio";
import Resume from "../components/sections/Resume";

const Home = () => {
    return (
        <>
            <Header />
            <Resume />
            <About />
            <Protofolio />
            <Blog />
        </>
    )
}

export default Home;