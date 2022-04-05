import React, {useState} from "react";
import Section from "../Section";
import styled, { keyframes } from "styled-components";
// Icons
import leftArrow from "../../icons/arrow-left.svg";
import device from "../../utils/deviceSize";

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`
const scaleUp = keyframes`
    0%{
        transform: scale(0.8) scaleY(0.5);
    }
    100%{
        transform: scale(1);
    }
`

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
    padding: 1.5em;
    font-size: 1rem;
    @media ${device.mobile}
    {
        font-size: clamp(0.4rem, 2vw, 1rem);
    }
`
const CarouselWrapper = styled.div`
    --item-width : 20em;
    --item-gap : 1em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: var(--item-gap);
    transition: 400ms ease-in-out transform;
    transform: translateX( calc( ( var(--item-gap) + var(--item-width) ) * ${props => -props.scrollIndex || 0 } ) );

`

const ItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    flex-flow: column nowrap;
    position: absolute;
    padding: 1em;
    bottom: 0;
    height: 60%;
    width: 100%;
    transition: 300ms ease-in-out;
    transition-property: opacity, transform;
    background: linear-gradient(to top, rgba(0 0 0 / 0.8), rgba(0 0 0 / 0));
    transform: translateY(60%);
`

const ItemTitle = styled.h1`
    color: #FFF;
    font-weight: 600;
`

const ItemDetails = styled.p`
    color: #FFF;
    font-weight: 300;
    opacity: 0;
    transform: translateY(20%);
    transition: 300ms ease-in-out;
    transition-property: opacity, transform;
    transition-delay: 0ms;
    text-align: center;
`
const ItemClickInfo = styled.p`
    color: dodgerblue;
    font-weight: 500;
    position: absolute;
    bottom: 1em;
    opacity: 0;
    transform: scale(1.4);
    transition: 300ms ease-in-out;
    transition-property: opacity, transform;
`

const ItemContainer = styled.div`
    background-color: #FFF;
    border-radius: 1rem;
    height: 25em;
    min-width: var(--item-width);
    background-image: url(https://picsum.photos/300/300);
    background-size: cover;
    position: relative;
    overflow: hidden;
    isolation: isolate;

    &::after{
        content : '';
        position: absolute;
        inset: 0.5em;
        border-radius: 1rem;
        border: 1px black solid;
        z-index: -1;
        backdrop-filter: blur(0px);
        transition: 400ms ease-in-out;
    }

    &:hover, &:focus{
        cursor: pointer;
        & ${ItemContent}
        {
            transform: translateY(0);
        }

        & ${ItemDetails}
        {
            opacity: 1;
            transition-delay: 400ms;
            transform: translateY(0);
        }
        & ${ItemClickInfo}
        {
            transform: scale(1);
            opacity: 1;
            transition-delay: 600ms;
        }
        &::after{
            backdrop-filter: blur(5px);
        }
    }
`

const Item = ({ title, description }) => (
    <ItemContainer>
        <ItemContent>
            <ItemTitle>{ title }</ItemTitle>
            <ItemDetails>{ description }</ItemDetails>
            <ItemClickInfo>Click to view details</ItemClickInfo>
        </ItemContent>
    </ItemContainer>
);

const ModalContainer = styled.div`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    justify-content: center;
    align-items: center;
    inset: 0;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${fadeIn} 300ms ease-in-out forwards;
`
const Modal = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 80vh;
    width: 80vw;
    border-radius: 1rem;
    background-color: #FFF;
    animation: 500ms ease-in-out forwards;
    animation-name: ${fadeIn}, ${scaleUp};
`


const Portfolio = () => {
    const [ scrollIndex, setScrollIndex ] = useState(0);
    const [ modal, setModal ] = useState(false);
    const items = [
        { 
            title : 'Portfolio',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, explicabo. Error est quas officia fugit.'
        },
        { 
            title : 'Project 2',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, explicabo. Error est quas officia fugit.'
        },
        { 
            title : 'Project 3',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, explicabo. Error est quas officia fugit.'
        },
        { 
            title : 'Project 3',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, explicabo. Error est quas officia fugit.'
        },
        { 
            title : 'Project 3',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, explicabo. Error est quas officia fugit.'
        },
        { 
            title : 'Project 3',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, explicabo. Error est quas officia fugit.'
        },
        { 
            title : 'Project 3',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, explicabo. Error est quas officia fugit.'
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
            <ModalContainer isOpen={modal}>
                <Modal />
            </ModalContainer>
            <Wrapper>
                <LeftArrow onClick={scrollBackward} />
                <Carousel>
                    <CarouselWrapper scrollIndex={scrollIndex}>
                        { items.map( ( value, index ) => <Item key={index} title={value.title} description={value.description} /> ) }
                    </CarouselWrapper>
                </Carousel>
                <RightArrow onClick={scrollForward} />
            </Wrapper>
        </Section>
    )
}

export default Portfolio;