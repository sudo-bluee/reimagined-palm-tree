import React from "react";
import styled from "styled-components";

const Text = styled.h1`
    font-family: "CaskaydiaCove NF";
    font-weight: 200;
    font-size: clamp(2rem, 3vw, 3rem);
`

const Logo = () => {
    return (
        <Text><span style={{ color : 'dodgerblue' }}>~</span>$ sudo</Text>
    )
}

export default Logo;