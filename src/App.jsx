import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './style.css';

const App = () => {
    return (
        <div >
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
};


export default App;