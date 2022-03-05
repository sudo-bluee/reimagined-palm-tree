import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";


const Container = styled.div`
    background-color: #292929;
    padding: 3rem 0;
    color: white;
`

const Welcome = styled.div`
    width:80% ;
    max-width: 1100px;
    margin: 0 auto ;
`

const Header = () => {
    return (
        <Container>
            <Navbar />
            <Welcome>
                <span>Hi</span>
                <h2>I'm Abdelhakim</h2>
                <h2>I am a software developer</h2>
            </Welcome>
        </Container>
    )
}

export default Header;