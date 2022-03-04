import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";


const Container = styled.div`
    background-color: #292929;
    padding: 3rem 0;
    color: white;
`

const Header = () => {
    return (
        <Container>
            <Navbar />
        </Container>
    )
}

export default Header;