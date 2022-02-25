import React from "react";
import styled from "styled-components";
import Bars from "../svg/bars.svg";

const Container = styled.nav`
    background-color: #292929;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    margin-top: 3rem;
    max-height: 2rem;
    
`;

// Make this a component
const Logo = styled.h1`
    flex: 1;
    color : white;
    text-align: center;
    white-space: nowrap;

`;

const NavList = styled.div`
    flex : 4;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 300;
    color : white;
    white-space: nowrap;
    /* Make 650px a global variable */
    @media only screen and (max-width:650px)
    {
        flex-direction: column;
        display: none;
        align-self: flex-start;
    }
`;

const NavToggler = styled(Bars)`
    flex : 1;
    display: none;
    justify-content: center;
    align-items: center;
    height: 3rem;
    fill: white ;
   @media only screen and (max-width:650px)
    {
        display: flex;
    }
`

const NavItem = styled.a`
    margin-inline: clamp(0.5em, 1vw, 2em);
    transition-duration: 300ms;
    position: relative;
    &:hover{
        color: dodgerblue;
        cursor: pointer;
    }

    &::after{
        content: "";
        display: block;
        opacity: 0;
        transition-duration: 300ms;
        position: absolute;
        margin-top: 10px;
        background-color: dodgerblue;
        height: 2px;
        width: 100%;
        border-radius: 10px;

    }

    &:hover::after{
        content: "";
        margin-top: 0px;
        opacity: 1;
    }
`;

const Navbar = () => {
    return ( 
    <Container>
        {/* Make this a div */}
        <Logo>~$ sudo</Logo>
        <NavList>
            <NavItem>Home</NavItem>
            <NavItem>Resume</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Protofolio</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Contact Us</NavItem>
        </NavList>
        <NavToggler fill="red" />
    </Container> )
}

export default Navbar;