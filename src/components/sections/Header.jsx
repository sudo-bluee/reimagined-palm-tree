import React, {useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { CSSTransition } from "react-transition-group"; 
import Navbar from "../Navbar";
import Button from "../Button";
import device from "../../utils/deviceSize";
// SVG Icons
import FacebookIcon from "../../icons/facebook.svg"
import InstagramIcon from "../../icons/instagram.svg"
import GithubIcon from "../../icons/github.svg"
import TwitterIcon from "../../icons/twitter.svg"

const fill = keyframes`
        0%{
            stroke-dashoffset: 550;
        }
        100%{
            stroke-dashoffset: 150;
        }
`

const wiggle = keyframes`
        0%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(-0.35em);
        }
        100%{
            transform: translateY(0);
        }
`

const Container = styled.header`
    background-color: #292929;
    padding: 5em 0;
    color: white;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2em;
    width:80% ;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5em 0;
    @media ${device.mobile} {
        flex-flow: column;
    }
`

const LeftSide = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    flex: 2;
    gap: 5em;
    
    @media ${device.mobile} {
        align-items: center;
        gap: 2em;
    }
`

const RightSide = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    justify-content: center;
    gap: 2em;
    @media ${device.mobile} {
        flex-flow: row wrap;
    }
`


const SocialRect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-weight: 600;
    right: 0;
    color: ${ props => props.color };
    background-color: white;
    border-radius: 50px;
    width: 4em;
    height: 100%;
    text-align: center;
    overflow: hidden;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    transition: 300ms ease-in-out;
    
`

const SocialIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    background-color: white;
    fill: ${ props => props.color };
    border-radius: 50%;
    width: 4em;
    height: 4em;
    z-index: 1;
    transition: 300ms ease-in-out;

    & > svg{
        height: 2.5em;
    }
`

const SocialButton = styled.a`
    display: block;
    position: relative;
    width: 100%;
    height: 4em;
    font-size: 1rem;

    &:hover, &:focus{
        & ${SocialIcon} {
            fill: white;
            background-color: ${ props => props.color };
        }

        & ${SocialRect} {
            width: 70%;
            padding-right: 4em;
            color: ${ props => props.color };
            transition: 300ms ease-in-out;
        }
    }

    @media ${device.mobile} {
        width: 4em;
        font-size: clamp(0.7rem, 3vw, 1rem);
        & ${SocialRect} {
            display: none;
        }
    }
`

const SocialSlide = ( props ) => {

    return (
        <SocialButton href={props.link} target="_blank" rel="noreferrer noopener" color={props.color}>
            <SocialIcon color={props.color}>
                {props.icon}
            </SocialIcon>
            <SocialRect color={props.color}>
                {props.info}
            </SocialRect>
        </SocialButton>
    )
};

const RegularText = styled.text`
        fill: white;
        font-size:64px;
        font-weight: 300;
        user-select: none;
`

const BigText = styled.text`
        fill: #292929;
        font-size:64px;
        font-weight: 700;
        user-select: none;
`

const HighlightedText = styled.text`
        fill: dodgerblue;
        font-size:64px;
        font-weight: 400;
        user-select: none;
`



const UpArrow = styled.path`
    d: path('M6.67609e-06 159.999C6.67609e-06 158.72 0.488288 157.44 1.46485 156.465C3.41798 154.512 6.58204 154.512 8.53516 156.465L30 177.937L51.4688 156.465C53.4219 154.512 56.5859 154.512 58.5391 156.465C60.4922 158.418 60.4922 161.582 58.5391 163.535L33.5391 188.535C31.5859 190.488 28.4219 190.488 26.4688 188.535L1.46876 163.535C0.484381 162.559 6.67609e-06 161.279 6.67609e-06 159.999Z');
    fill:#707070;
    transition: fill 200ms ease-in, transform 200ms ease-in;

    &:hover{
        fill: dodgerblue;
        transform: translateY(0.25em);
        cursor: pointer;
    }
`

const DownArrow = styled.path`
    d: path('M60.0039 30.0008C60.0039 31.2802 59.5156 32.5602 58.5391 33.5352C56.5859 35.4883 53.4219 35.4883 51.4687 33.5352L30.0039 12.0633L8.53516 33.5352C6.58203 35.4883 3.41797 35.4883 1.46484 33.5352C-0.488281 31.582 -0.488281 28.418 1.46484 26.4648L26.4648 1.46485C28.418 -0.488278 31.582 -0.488278 33.5352 1.46485L58.5352 26.4648C59.5195 27.4414 60.0039 28.7211 60.0039 30.0008Z');
    fill:#707070;
    transition: fill 200ms ease-in, transform 200ms ease-in;

    &:hover{
        fill: dodgerblue;
        transform: translateY(-0.25em);
        cursor: pointer;
    }
`


const HiText = styled.text`
        fill: white;
        font-size: 30px;
        font-weight: 300;
        user-select: none;
        
        &.flow-enter-active{
            animation: ${wiggle} cubic-bezier(0.86, 0.14, 0.52, 0.98) 400ms forwards;
        }
`


const HorizontalLine = styled.line`
        stroke: dodgerblue;
        stroke-width: 2px;
        stroke-dasharray: 150 200;
        animation: none;
        opacity: 0;

        &.flow-enter-active{
            animation: ${fill} ease-in 800ms forwards;
            opacity: 1;
        }

`

const VerticalLine = styled.line`
        stroke: dodgerblue;
        stroke-width: 2px;
        stroke-dasharray: 150 200;
        stroke-dashoffset: 550;
        animation-delay: 300ms;
        animation: none;
        opacity: 0;

        &.flow-enter-active{
            animation: ${fill} ease-out 600ms forwards;
            opacity: 1;
        }

`
const LinkButton = styled.a`
    position: relative;
    text-decoration: none;
    color: #949494;
    font-weight: 300;
    transition: 300ms ease-in-out;
    transition-property: transform;
    cursor: pointer;
    &::after{
        content: '';
        position: absolute;
        left: 42%;
        top: 120%;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #949494;
        clear: both;
        transition: 300ms ease-in-out;
        transform: translateY(0.5em);
        opacity: 0;
    }
    &:hover{
        transform: translateY(-0.2em);
        &::after{
            transform: translateY(0);
            opacity: 1;
        }
    }
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    font-size: clamp(1rem, 3vw, 1.5rem);
`

const SlideContainer = styled.g`
    transform: translateY( ${ ( { slide } ) => -slide * 100 + 300}px );
    transition: transform 600ms ease-in-out;
`

const Header = () => {
    const [ currentSlide, setSlide ] = useState(0);
    const [ animating, setAnimating ] = useState(false);
    const [ manual, setManual ] = useState( false );

    useEffect( () => {
        if( !manual ) 
        {
            const id = setTimeout( () => {
                slideNext();
                setAnimating( true );
            }, 3000 )
            return () => clearTimeout( id );
        }
    }, [currentSlide])

    const slides = [
        'Software developer',
        'Desktop developer',
        'Unix Administrator',
        'Mobile Developer',
    ]

    function slidePrev()
    {
        const prev = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        setSlide( prev );
    }

    function slideNext()
    {
        const next = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        setSlide( next );
    }

    function onClickSlideNext()
    {
        slideNext();
        setManual( true );
    }

    function onClickSlidePrev()
    {
        slidePrev();
        setManual( true );
    }

    return (
        <Container id="home">
            <Content>
                    <LeftSide>
                        <svg viewBox="0 0 850 380" fill="none" xmlns="http://www.w3.org/2000/svg" pointerEvents="bounding-box">
                            <RegularText x="0" y="100">I'm</RegularText>
                            <HighlightedText x="105" y="100">Abdelhakim</HighlightedText>
                            <RegularText x="0" y="300">I am a</RegularText>
                            <line x1="54" y1="23.5" x2="148" y2="23.5" stroke="#6A6A6A"/>
                            <line x1="363.5" y1="125" x2="363.5" y2="229" stroke="#6A6A6A"/>
                            <CSSTransition classNames="flow" timeout={1000} in={animating}>
                                <HiText x="0" y="32">Hi</HiText>
                            </CSSTransition>

                            <CSSTransition classNames="flow" timeout={1000} in={animating}>
                                <HorizontalLine x1="363.5" y1="125" x2="363.5" y2="229" stroke="#6A6A6A" />
                            </CSSTransition>
                            <CSSTransition classNames="flow" timeout={1000} in={animating} onEntered={() => setAnimating(false)}>
                                <VerticalLine x1="54" y1="23.5" x2="148" y2="23.5" stroke="#6A6A6A"/>
                            </CSSTransition>

                            <mask id="sliderMask" style={ { maskType : 'alpha'} } maskUnits="userSpaceOnUse" x="190" y="240" width="650" height="80">
                                <rect x="190" y="240" width="650" height="80" fill="white"/>
                            </mask>
                            <rect x="190" y="240" width="650" height="80" fill="#FFF"/>
                            <g mask="url(#sliderMask)">
                                <SlideContainer slide={currentSlide}>
                                    {slides.map( ( value, index ) => (<BigText  x="205" y={index * 100} key={index} >{value}</BigText>) )}
                                </SlideContainer>
                            </g>
                        <g transform="translate(450 185)">
                                <UpArrow onClick={onClickSlidePrev} />
                                <DownArrow onClick={onClickSlideNext} />
                            </g>
                        </svg>
                        <ButtonsWrapper>
                            <Button href="#resume">Hire Me</Button>
                            <LinkButton href="#portfolio">See my works</LinkButton>
                        </ButtonsWrapper>
                    </LeftSide>
                    <RightSide>
                        <SocialSlide icon={<FacebookIcon />} link="#" info="Abdelhakim Merzoug" color="#4267B2"/>
                        <SocialSlide icon={<InstagramIcon />} link="#" info="@sudo-blue" color="#8a3ab9" />
                        <SocialSlide icon={<GithubIcon />} link="http://github.com/sudo-node" info="sudo-node" color="#000" />
                        <SocialSlide icon={<TwitterIcon />} link="http://twitter.com/sudo_blue" info="@sudo_blue" color="#00acee" />
                    </RightSide>
            </Content>
        </Container>
    )
}

export default Header;