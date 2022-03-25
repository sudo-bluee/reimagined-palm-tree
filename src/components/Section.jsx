import React, { forwardRef, useRef } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../utils/IntersectionObserver";

const Wrapper = styled.section`
    background-color : #C4C4C4;
`

const Content = styled.div`
    width:80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3em 0;
    gap: 0.5em;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    transition: 700ms ease-in-out 200ms;
    transform: ${props => props.isVisible || 'translateY(-50%)'};
    opacity: ${props => props.isVisible ? 1 : 0};
`

const Desc = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    width: 70%;
    text-align: center;
    color: #494949;
    transition: 700ms ease-in-out 700ms;
    transform: ${props => props.isVisible || 'translateY(50%)'};
    opacity: ${props => props.isVisible ? 1 : 0};
`

const Section =  (props) => {
    const wrapperRef = useRef();
    const entry = useIntersectionObserver(wrapperRef, { threshold : 1.0 });
    const isVisible = entry?.isIntersecting;
    return (
        <Wrapper id={props.id} ref={wrapperRef}>
            <Content>
                <Title isVisible={isVisible} >{props.title}</Title>
                { props.description && <Desc isVisible={isVisible}>{props.description}</Desc> }
                {props.children}
            </Content>
        </Wrapper>
    )
}

export default Section;