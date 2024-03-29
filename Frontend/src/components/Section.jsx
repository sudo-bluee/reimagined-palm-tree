import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../utils/IntersectionObserver";
import device from "../utils/deviceSize";

const Container = styled.section`
    --title-duration : 600ms;
    --description-duration : 500ms;
    background-color : #C4C4C4;
    margin-bottom: -1px;
    overflow-x: hidden;
`

const Content = styled.div`
    width:80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3em 0;
    gap: 0.5em;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: space-between;
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    align-self: center;
    transition: var(--title-duration) ease-in-out;
    transform: ${props => props.isVisible || 'translateY(-50%)'};
    opacity: ${props => props.isVisible ? 1 : 0};
    transition-property: opacity, transform;
    @media ${device.mobile}{
        width: 90%;
        font-size: 2rem;
    }
`

const Desc = styled.h3`
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
    align-self: center;
    width: 60ch;
    color: #494949;
    transition: var(--description-duration) ease-in-out var(--title-duration);
    transform: ${props => props.isVisible || 'translateY(50%)'};
    opacity: ${props => props.isVisible ? 1 : 0};
    transition-property: opacity, transform;
    @media ${device.mobile}{
        width: 90%;
        font-size: 1rem;
    }
`

const ContentWrapper = styled.div`
    padding: 5em 0;
`

const Section =  (props) => {
    const wrapperRef = useRef();
    const entry = useIntersectionObserver(wrapperRef, { rootMargin: '-30%' }, true);
    const isVisible = entry?.isIntersecting;
    useEffect( () => {
        props.onVisiblityChange?.(isVisible);
    }, [isVisible])

    return (
        <Container id={ props.id } ref={wrapperRef}>
            <Content>
                <Title isVisible={isVisible} >{props.title}</Title>
                { props.description && <Desc isVisible={isVisible}>{props.description}</Desc> }
                <ContentWrapper>
                    { props.children }
                </ContentWrapper>
            </Content>
        </Container>
    )
}

export default Section;