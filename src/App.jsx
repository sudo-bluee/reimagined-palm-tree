import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// Use styled compenents global style
import './style.css';

const App = () => {
    return (
        <>
            <Home />
            <Footer />
        </>
    );
};


export default App;