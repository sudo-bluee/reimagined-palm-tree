import React from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
    from{
        opacity: 1;
    }
    50%{
        opacity : 0;
    }
    to{
        opacity: 1;
    }
`

const Text = styled.a`
    font-family: "CaskaydiaCove NF";
    font-weight: 200;
    font-size: clamp(1.5rem, 3vw, 3rem);
    margin-right: ${props => props.animate ? '3ch' : '0'};
    text-decoration: none;
    color: inherit;
    position: relative;
    width: max-content;
    cursor: pointer;

    &::after{
        content: "";
        display: ${props => props.animate ? 'block' : 'none'};
        position: absolute;
        background-color: currentColor;
        width: 1ch;
        inset-block: 0em;
        right: -2ch;
        opacity: 0;
        animation: ${blink} steps(1, end) 1500ms infinite;
    }
`

const SecondaryText = styled.span`
    color: dodgerblue;
`

const Logo = ( props ) => {
    return (
        <Text {...props}>
            <SecondaryText>~</SecondaryText>$ sudo
        </Text>
    )
}

export default Logo;