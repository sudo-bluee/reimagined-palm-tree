import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`;

// Make this a component
const Logo = styled.h1`
    flex: 1;
    color : white;
    white-space: nowrap;
    text-align: center;
`;

const NavList = styled.div`
    flex : 4;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 400;
    color : white;
    white-space: nowrap;

    /* Make 650px a global variable */
    @media only screen and (max-width:600px)
    {
        display:none
    }
`;

const NavToggler = styled.div`
    display: none;
    fill: white;
    position: absolute;
    justify-self: flex-end;

    &:hover{
        cursor: pointer;
        fill: dodgerblue;
        transition: fill 300ms ease;
    }
   @media only screen and (max-width:600px)
    {
        display: flex;
    }
`

const NavItem = styled.a`
    margin-inline: clamp(0.5em, 1vw, 2em);
    transition: color 300ms ease;
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
    const [isOpen, setOpen] = useState(false);
    return ( 
    <Container>
        {/* Make this a div */}
        <Logo>~$ sudo</Logo>
        <NavList isOpen={isOpen}>
            <NavItem>Home</NavItem>
            <NavItem>Resume</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Protofolio</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Contact Us</NavItem>
        </NavList>
        <NavToggler onClick={() => setOpen(!isOpen)} >
        
        
        </NavToggler>
    </Container> )
}

export default Navbar;