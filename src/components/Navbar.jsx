import React, { useState, useEffect } from "react";
import styled from "styled-components"
import Logo from "./Logo";
import device from "../utils/deviceSize";

const Container = styled.nav`
    position: fixed;
    display: flex;
    color: white;
    width: 100%;
    transition: 200ms ease-in-out;
    transition-property: padding, color, background-color;
    font-size: clamp(1.1rem, 2vw, 2.2rem);
    padding: ${ props => props.hasScrolled ? '0.5em 2em' : '1em 3em'};
    color: ${ props => props.hasScrolled ? '#292929' : '#FFF'};
    background-color: ${ props => props.hasScrolled ? '#C4C4C4' : '#292929'};    
    align-items: center;
    justify-content: space-between;
    z-index: 10;
`

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    gap: 1.5em;
    @media ${device.mobile} {
        flex-flow: column;
        position: fixed;
        background-color: inherit;
        font-size: clamp(1.2rem, 3vw, 2rem);
        transition: transform 600ms ease-in-out, box-shadow 600ms ease-in-out; 
        visibility: ${ props => props.isVisible ? 'visible' : 'hidden' };
        box-shadow: ${ props => props.isOpen ? '-1px 0px 10px 2px rgba(0,0,0, 0.30)' : '0px 0px 0px 0px rgba(0,0,0, 0)' };
        transform: ${ props => props.isOpen ? 'translateX(0%)' : 'translateX(100%)' };
        height: 100%;
        width: 80%;
        right: 0;
        top: 0;
        z-index: 10;
    }
`

const Item = styled.a`
    transition: color 200ms ease;
    position: relative;
    color: inherit;
    text-decoration: none;
    font-weight: 300;
    &::after{
        display: block;
        width: 100%;
        height: 0.2em;
        border-radius: 5px;
        background-color:#0085FF;
        position: absolute;
        pointer-events: none;
        content: "" ;
        opacity:0;
        transform: translateY(100%) ;
        transition-duration: 200ms;
    }

    &:hover, &:focus{
        cursor: pointer;
        color:#0085FF;
        &::after{
            opacity:1;
            transform: translateY(0);
        }
    }
`

const ToggleLine = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 15px;
    background-color: #FFF;
    transition: 300ms ease-in-out;
`

const ToggleButton = styled.div`
    display: none;
    flex-flow: column;
    position: absolute;
    right: 2em;
    transition: right 300ms ease-in-out;
    width: 2em;
    gap: .4em;
    z-index: 99;
    @media ${device.mobile} {
        display : flex
    }
    &:hover {
        opacity: 0.8;
    }

    & ${ToggleLine}{
        ${ props => props.hasScrolled && 'background-color: #292929;' } 
    }

    & ${ToggleLine}:nth-child(2){
        transform-origin: 100% 0;
        transform : ${ props => props.toggled ? 'scaleX(70%)' : 'scaleX(100%)' };
    }



`



const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isAnimating, setAnimating] = useState(false);
    const [hasScrolled, setScrolled] = useState(false);

    function handleScroll()
    {
        setScrolled( window.scrollY > 0 );
        
    }

    function toggleNavbar()
    {
        setOpen( !isOpen )
        setAnimating( true );
    }

    useEffect( () => {
        setScrolled( window.scrollY > 0 );
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container hasScrolled={hasScrolled}>
            <Logo />
            <List isOpen={ isOpen } isVisible={ isOpen || isAnimating } onTransitionEnd={ () => setAnimating( false ) } >
                <Item href="#home">Home</Item>
                <Item href="#about">About</Item>
                <Item href="#resume">Resume</Item>
                <Item href="#portfolio">Portfolio</Item>
                <Item href="#blog">Blog</Item>
                <Item href="#contact">Contact</Item>
            </List>

            <ToggleButton hasScrolled={hasScrolled} onClick={toggleNavbar} toggled={ isOpen }>
                <ToggleLine />
                <ToggleLine />
                <ToggleLine />
            </ToggleButton>
        </Container>
    );
}

export default Navbar;