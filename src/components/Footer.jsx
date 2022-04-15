import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    background-color: #292929;
    color: #FFF;
`

const Content = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3em 0;
`

const Footer = () => {
    return (
        <Container>
            <Content>
                Testing..
            </Content>
        </Container>
    )
}

export default Footer;