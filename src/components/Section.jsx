import React, { forwardRef, useRef, useEffect} from "react";
import styled from "styled-components";
import useIntersectionObserver from "../utils/IntersectionObserver";

const Wrapper = styled.section`
    background-color : #C4C4C4;
    margin-bottom: -1px;
    --title-duration : 600ms;
    --description-duration : 500ms;
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
    transition: var(--title-duration) ease-in-out;
    transform: ${props => props.isVisible || 'translateY(-50%)'};
    opacity: ${props => props.isVisible ? 1 : 0};
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
`

const Section =  (props) => {
    const wrapperRef = useRef();
    const entry = useIntersectionObserver(wrapperRef, { rootMargin: '-30%' });
    const isVisible = entry?.isIntersecting;
    useEffect( () => {
        props.onVisiblityChange?.(isVisible);
    }, [isVisible])

    return (
        <Wrapper id={ props.id } ref={wrapperRef}>
            <Content>
                <Title isVisible={isVisible} >{props.title}</Title>
                { props.description && <Desc isVisible={isVisible}>{props.description}</Desc> }
                { props.children }
            </Content>
        </Wrapper>
    )
}

export default Section;