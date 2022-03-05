import React from "react";
import styled from "styled-components"
import Logo from "./Logo";

const Container = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto ;
    padding: 1em 0;
    align-items: center;
    justify-content: space-between ;
`

const List = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    gap: 1.5em;
    font-size: clamp(1rem, 2vw, 2.2rem);

`

const Item = styled.a`
    transition: color 200ms ease;
    position: relative;
    &&::after{
        display: block;
        width: 100%;
        height: 0.2em;
        border-radius: 5px;
        background-color:#0085FF;
        opacity:0;
        position: absolute;
        content: "" ;
        margin-top: 1em;
        transition-duration: 200ms;
        pointer-events: none;
    }

    :hover{
        cursor: pointer;
        color:#0085FF;
        &&::after{
            opacity:1;
            margin-top: 0em;
        }
    }

`

const Lang = styled.div`

`

const Navbar = () => {
    return (
        <Container>
            <Logo />
            <List>
                <Item>Home</Item>
                <Item>Resume</Item>
                <Item>About</Item>
                <Item>Protofolio</Item>
                <Item>Blog</Item>
                <Item>Contact Us</Item>
            </List>
            <Lang>
                EN
            </Lang>
        </Container>
    );
}

export default Navbar;