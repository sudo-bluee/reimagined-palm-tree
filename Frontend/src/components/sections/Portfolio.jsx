import React, { useState, useEffect } from "react";
import Section from "../Section";
import styled, { keyframes } from "styled-components";
// Icons
import leftArrowIcon from "../../icons/arrow-left.svg";
import closeIcon from "../../icons/close.svg";
import device from "../../utils/deviceSize";
import stackToName from "../../utils/stackHelper";

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
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const LeftArrow = styled(leftArrowIcon)`
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

const RightArrow = styled(leftArrowIcon)`
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
    }
`

const Item = ({ title, description, ...other }) => (
    <ItemContainer {...other}>
        <ItemContent>
            <ItemTitle>{ title }</ItemTitle>
            <ItemDetails>{ description }</ItemDetails>
            <ItemClickInfo>Click to view details</ItemClickInfo>
        </ItemContent>
    </ItemContainer>
);

const ModalBackdrop = styled.div`
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
    max-width: 1200px;
    font-size: clamp(0.4rem, 2vw, 1rem);
    padding: 2em;
    width: 90vw;

    border-radius: 1rem;
    background-color: #FFF;
    animation: 500ms ease-in-out forwards;
    animation-name: ${fadeIn}, ${scaleUp};
`

const ModalContainer = styled.div`
    max-height : 90vh;
    overflow-y: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    gap: 3em;
    padding: 1em;
`

const ModalTitle = styled.h1`
    font-weight: 600;
    font-size: 3em;
    color: #000;
    text-align: center;
`

const ModalSecondaryTitle = styled.h2`
    font-weight: 500;
    font-size: 2em;
    color: #292929;
`

const ModalContent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 2rem;
    justify-content: space-around;
    align-items: center;
    @media ${device.mobile}{
        flex-flow: column nowrap;
    }
`

const ModalImg = styled.img`
    border-radius: 1rem;
    object-fit: contain;
    max-width: 100%;
    @media ${device.widescreen}
    {        
        flex: 2;
        width: 0;
    }
`

const ModalDescription = styled.p`
    font-weight: 300;
    color: #292929;
    flex: 1;
    text-align: justify;
`

const ModalFooter = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 3em;
    margin-inline: 3em;
`
const StackItem = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 1em;
    align-items: center;
`
const StackName = styled.p`
    color: #000;
    font-weight: 600;
`
const StackIcon = styled.img`
    width: 5em;
`

const ModalClose = styled(closeIcon)`
    position: fixed;
    top: 4em;
    right: 4em;
    height: 2em;
    transition: 300ms ease-in-out;
    transition-property: opacity,transform;
    &:hover{
        opacity: 0.8;
        transform: scale(1.1);
        cursor: pointer;
    }
`


const Portfolio = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [modal, setModal] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const carouselItems = items.map((value, index) => (
        <Item key={value._id}
            onClick={() => {
                setModal(true);
                setScrollIndex(index);
                setModalItem(index);
            }}
            title={value.name}
            description={value.shortDesc} />
    ));


    useEffect(() => {
        document.body.style.overflow = modal ? "hidden" : "auto";
    }, [modal])

    useEffect(() => {
        const getProjects = async () => {
            setLoading(true);
            const data = await fetch("http://localhost:5000/projects");
            const jsonData = await data.json();
            setItems(jsonData);
        }
        getProjects()
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [])

    
    function scrollForward()
    {
        setScrollIndex( (scrollIndex + 1) % items.length );
    }

    function scrollBackward()
    {
        setScrollIndex( scrollIndex - 1 < 0 ? items.length - 1 : scrollIndex - 1 );
    }

    return (
        <Section id="portfolio"  title="Portfolio" description="A list of my previous built projects">
            <ModalBackdrop isOpen={modal}>
                {modal && <Modal>
                    <ModalClose onClick={() => setModal(false)} />
                    <ModalContainer>
                        <ModalTitle>{items[modalItem].name}</ModalTitle>
                        <ModalContent>
                            <ModalImg src="https://picsum.photos/600/400" />
                            <ModalDescription>
                            {items[modalItem].longDesc}
                            </ModalDescription>
                        </ModalContent>
                        <ModalSecondaryTitle>Featured:</ModalSecondaryTitle>
                        <ModalFooter>
                            {
                                items[modalItem].stack.map(value => (
                                    <StackItem>
                                        <StackIcon src={`/images/${value}.png`} />
                                        <StackName>{stackToName[value]}</StackName>
                                    </StackItem>)
                                )
                            }
                            
                        </ModalFooter>
                    </ModalContainer>
                </Modal> }
            </ModalBackdrop>
            <Wrapper>
                <LeftArrow onClick={scrollBackward} />
                <Carousel>
                    <CarouselWrapper scrollIndex={scrollIndex}>
                        { /* TODO : A loading spinner */}
                        { isLoading ? "Loading.." : carouselItems }
                    </CarouselWrapper>
                </Carousel>
                <RightArrow onClick={scrollForward} />
            </Wrapper>
        </Section>
    )
}

export default Portfolio;