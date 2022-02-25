import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

const Container = styled.div`
    background-color: #292929;  
    height: 60vh;
    padding-block: 3rem;
`

const Header = () => {
    return (
        <Container>
            <Navbar />
        </Container>
    )
}

export default Header;