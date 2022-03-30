import React from "react";
import Section from "../Section";
import styled from "styled-components";
// Icons
import leftArrow from "../../icons/arrow-left.svg";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 3rem;
    gap: 2rem;
`

const LeftArrow = styled(leftArrow)`
    order: 0;
    height: 3rem;
    fill : #707070;
`

const RightArrow = styled(leftArrow)`
    order: 2;
    height: 3rem;
    transform : rotate(180deg);
    fill : #707070;
`

const Carousel = styled.div`
    order: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    overflow-x: scroll;
    padding: 1.5rem;
    width: 100%;
    scroll-snap-type: x mandatory;
`

const Item = styled.div`
    background-color: #949494;
    border-radius: 20px;
    min-width: 240px;
    height: 300px;
    transition: 300ms ease-in-out;
    transition-property: transform, border-radius, background-color, margin;
    &:hover{
        cursor: pointer;
        border-radius: 0px;
        transform : scale(1.1);
        margin-inline: 1em;
        background-color: #292929;
    }
`

const Portfolio = () => {
    return (
        <Section id="portfolio" title="Portfolio" description="A list of my previous built projects">
            <Wrapper>
                <LeftArrow />
                <Carousel>
                    <Item />    
                    <Item />    
                    <Item />    
                    <Item />    
                    <Item />    
                    <Item />    
                </Carousel>
                <RightArrow />
            </Wrapper>
        </Section>
    )
}

export default Portfolio;