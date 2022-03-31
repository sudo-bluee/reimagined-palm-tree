import React, {useState} from "react";
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
    transition: 300ms ease-in-out;
    transition-property: fill, transform;
    &:hover{
        cursor: pointer;
        fill: #292929;
        transform: translateX(-20%);
    }
`

const RightArrow = styled(leftArrow)`
    order: 2;
    height: 3rem;
    transform : rotate(180deg);
    fill : #707070;
    transition: 300ms ease-in-out;
    transition-property: fill, transform;
    &:hover{
        cursor: pointer;
        fill: #292929;
        transform: translateX(20%) rotate(180deg);
    }
`

const Carousel = styled.div`
    order: 1;
    overflow-x: hidden;
    width: 100%;
    padding: 1.5rem;
`
const CarouselWrapper = styled.div`
    --item-width : 15rem;
    --item-gap : 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: var(--item-gap);
    transition: 400ms ease-in-out transform;
    transform: translateX( calc( ( var(--item-gap) + var(--item-width) ) * ${props => -props.scrollIndex || 0 } ) );
`

const ItemContent = styled.div`
    padding: 1rem;
    position: absolute;
    bottom: 0;
    max-height: max-content;
    width: 100%;
    transition: 300ms ease-in-out;
    background: linear-gradient(to top, rgba(0 0 0 / 0.8), rgba(0 0 0 / 0));
    backdrop-filter: blur(1px);
`

const ItemContainer = styled.div`
    background-color: #FFF;
    border-radius: 1rem;
    height: 300px;
    min-width: var(--item-width);
    background-image: url(https://picsum.photos/300/300);
    background-size: cover;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    &:hover{
        cursor: pointer;
        & ${ItemContent}
        {
            max-height: 50%;
            backdrop-filter: blur(5px);
        }
    }

    &::after{
        transition: 300ms ease-in-out;
        transform-origin: 0% 100%;
        content: '';
        inset: 0;
        z-index: -1;
        position: absolute;

    }
`
const ItemTitle = styled.h1`
    color: #FFF;
    font-weight: 600;
`



const Item = () => (
    <ItemContainer>
        <ItemContent>
            <ItemTitle>
                Project 1
            </ItemTitle>
        </ItemContent>
    </ItemContainer>
);

const Portfolio = () => {
    const [ scrollIndex, setScrollIndex ] = useState(0);
    const items = [
        { 
            title : 'Project 1',
            description : 'Lorem Ipsum adzd'
        },
        { 
            title : 'Project 2',
            description : 'Lorem Ipsum adzd'
        },
        { 
            title : 'Project 3',
            description : 'Lorem Ipsum adzd'
        },
    ]

    function scrollForward()
    {
        setScrollIndex( (scrollIndex + 1) % items.length );
    }

    function scrollBackward()
    {
        setScrollIndex( scrollIndex - 1 < 0 ? items.length - 1 : scrollIndex - 1 );
    }

    return (
        <Section id="portfolio" title="Portfolio" description="A list of my previous built projects">
            <Wrapper>
                <LeftArrow onClick={scrollBackward} />
                <Carousel>
                    <CarouselWrapper scrollIndex={scrollIndex}>
                        { items.map( ( value, index ) => <Item sum={index + 1} key={index} /> ) }
                    </CarouselWrapper>
                </Carousel>
                <RightArrow onClick={scrollForward} />
            </Wrapper>
        </Section>
    )
}

export default Portfolio;