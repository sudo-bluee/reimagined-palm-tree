import React from "react";
import styled from "styled-components";
import FacebookIcon from "../icons/facebook.svg";
import InstagramIcon from "../icons/instagram.svg";
import GithubIcon from "../icons/github.svg";
import TwitterIcon from "../icons/twitter.svg";

const Container = styled.footer`
    background-color: #292929;
    color: #FFF;
`

const Content = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    gap: 1em;
`
const Copyrights = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: #949494;
`

const Social = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 1em;
`

const SocialButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    fill: ${props => props.color };
    border-radius: 50%;
    width: 3em;
    height: 3em;
    transition: 300ms ease-in-out;
    
    &:hover {
        fill: white;
        background-color: ${ props => props.color };
    }
    & > svg {
        height: 1.8em;
    }
`


const Footer = () => {
    return (
        <Container>
            <Content>
                <Social>
                    <SocialButton href="http://facebook.com/sudoblue" color="#4267B2">
                        <FacebookIcon />
                    </SocialButton>
                    <SocialButton href="http://instagram.com/sudo_blue" color="#8a3ab9">
                        <InstagramIcon />
                    </SocialButton>
                    <SocialButton href="http://github.com/sudo-bluee" color="#000">
                        <GithubIcon />
                    </SocialButton>
                    <SocialButton href="http://twitter.com/sudo_blue" color="#00acee">
                        <TwitterIcon />
                    </SocialButton>
                </Social>
                <Copyrights>Sudo Blue © 2022</Copyrights>
            </Content>
        </Container>
    )
}

export default Footer;