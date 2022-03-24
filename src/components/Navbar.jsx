import React, { useState } from "react";
import styled from "styled-components"
import Logo from "./Logo";
import device from "../utils/deviceSize";

const Container = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto ;
    padding: 1em 0;
    align-items: center;
    justify-content: space-between;
`

const List = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    gap: 1.5em;
    font-size: clamp(1.1rem, 2vw, 2.2rem);
    @media ${device.mobile} {
        flex-flow: column;
        position: fixed;
        background-color: #292929;
        font-size: clamp(1.2rem, 3vw, 2rem);
        box-shadow: -2px 0px 25px 5px #303030;;
        transition: transform 300ms ease-in-out, visibility 300ms 0ms linear; 
        visibility: ${ props => props.toggled ? 'visible' : 'hidden' };
        transform: ${ props => props.toggled ? 'translateX(0%)' : 'translateX(100%)' };
        width: 80%;
        height: 100%;
        right: 0;
        top: 0;
        z-index: 10;
    }
`

const Item = styled.a`
    transition: color 200ms ease;
    position: relative;
    text-decoration: none;
    color: #FFF;
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
const ToggleButton = styled.div`
    display: none;
    flex-flow: column;
    width: 2em;
    gap: .4em;
    z-index: 11;
    @media ${device.mobile} {
        display : flex
    }
    &:hover {
        opacity: 0.8;
    }

    & ${ToggleLine}:nth-child(2){
        transition: 300ms ease-in-out;
        transform-origin: 100% 0;
        transform : ${ props => props.toggled ? 'scaleX(70%)' : 'scaleX(100%)' };
    }
`
const ToggleLine = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 15px;
    background-color: #FFF;
`


const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <Container>
            <Logo />
            <List toggled={ isOpen }>
                <Item href="#">Home</Item>
                <Item href="#">Resume</Item>
                <Item href="#">About</Item>
                <Item href="#">Protofolio</Item>
                <Item href="#">Blog</Item>
                <Item href="#">Contact</Item>
            </List>
            <ToggleButton onClick={() => setOpen(!isOpen)} toggled={ isOpen }>
                <ToggleLine />
                <ToggleLine />
                <ToggleLine />
            </ToggleButton>
        </Container>
    );
}

export default Navbar;