import React, {useState} from "react";
import styled from "styled-components";
import Navbar from "../Navbar";


const Container = styled.div`
    background-color: #292929;
    padding: 3em 0;
    color: white;
`

const Welcome = styled.div`
    width:80% ;
    max-width: 1100px;
    margin: 0 auto;
    padding: 3em 0 ;
`

const Animated = styled.div`
    width: 80%;

    .small{
        fill: white;
        font-size: 36px;
        font-weight: 300;
        pointer-events: none;
    }

    .regular{
        fill: white;
        font-size:64px;
        font-weight: 300;
        pointer-events: none;

    }

    .highlight {
        fill: dodgerblue;
        font-size:64px;
        font-weight: 400;
        pointer-events: none;

    }

    .black{
        fill: white;
        font-size:64px;
        font-weight: 700;
        pointer-events: none;
    }
    /* #test{
        stroke: dodgerblue;
        stroke-width: 2px;
        stroke-dasharray: 150 200;
        animation: oj ease-in 1s infinite;

    }

    #test2{
        stroke: dodgerblue;
        stroke-width: 2px;
        stroke-dasharray: 150 200;
        stroke-dashoffset: 550;
        animation: oj ease-out 1s infinite;
        animation-delay: 600ms;

    } */
    @keyframes oj{
            0%{
                stroke-dashoffset: 550;
            }
            100%{
                stroke-dashoffset: 150;
            }
        }

`

const DownArrow = styled.path`
    d: path('M6.67609e-06 159.999C6.67609e-06 158.72 0.488288 157.44 1.46485 156.465C3.41798 154.512 6.58204 154.512 8.53516 156.465L30 177.937L51.4688 156.465C53.4219 154.512 56.5859 154.512 58.5391 156.465C60.4922 158.418 60.4922 161.582 58.5391 163.535L33.5391 188.535C31.5859 190.488 28.4219 190.488 26.4688 188.535L1.46876 163.535C0.484381 162.559 6.67609e-06 161.279 6.67609e-06 159.999Z');
    fill:#707070;
    transition: fill 200ms ease-in, transform 200ms ease-in;

    &:hover{
        fill: dodgerblue;
        transform: translateY(0.25em);
        cursor: pointer;
    }
`

const UpArrow = styled.path`
    d: path('M60.0039 30.0008C60.0039 31.2802 59.5156 32.5602 58.5391 33.5352C56.5859 35.4883 53.4219 35.4883 51.4687 33.5352L30.0039 12.0633L8.53516 33.5352C6.58203 35.4883 3.41797 35.4883 1.46484 33.5352C-0.488281 31.582 -0.488281 28.418 1.46484 26.4648L26.4648 1.46485C28.418 -0.488278 31.582 -0.488278 33.5352 1.46485L58.5352 26.4648C59.5195 27.4414 60.0039 28.7211 60.0039 30.0008Z');
    fill:#707070;
    transition: fill 200ms ease-in, transform 200ms ease-in;

    &:hover{
        fill: dodgerblue;
        transform: translateY(-0.25em);
        cursor: pointer;
    }
`

const SlideContainer = styled.g`
    transform: translateY( ${ ( { slide } ) => -slide * 100 + 300}px );
    transition: transform 400ms ease-in-out;
`

const Header = () => {
    const [ currentSlide, setSlide ] = useState(0);
    const slides = [
        'Software developer',
        'Desktop developer',
        'Unix Administrator',
        'Mobile Developer',
    ]

    function slidePrev()
    {
        const prev = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        console.log(prev);
        setSlide( prev );
    }

    function slideNext()
    {
        const next = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        setSlide( next );
    }

    return (
        <Container>
            <Navbar />
            <Welcome>
                <Animated>
                    <svg viewBox="0 0 850 380" fill="none" xmlns="http://www.w3.org/2000/svg" pointer-events="bounding-box">
                        <text x="0" y="36" className="small">Hi</text>
                        <text x="0" y="105" className="regular">I'm</text>
                        <text x="105" y="105" className="highlight">Abdelhakim</text>
                        <text x="0" y="300" className="regular">I am a</text>
                        <line x1="54" y1="23.5" x2="148" y2="23.5" stroke="#6A6A6A"/>
                        <line x1="363.5" y1="125" x2="363.5" y2="229" stroke="#6A6A6A"/>
                        <line id="test" x1="54" y1="23.5" x2="148" y2="23.5" stroke="#6A6A6A"/>
                        <line id="test2" x1="363.5" y1="125" x2="363.5" y2="229" stroke="#6A6A6A"/>

                        <mask id="sliderMask" style={ { maskType : 'alpha'} } maskUnits="userSpaceOnUse" x="190" y="240" width="650" height="80">
                            <rect x="190" y="240" width="650" height="80" fill="white"/>
                        </mask>
                        <rect x="190" y="240" width="650" height="80" fill="#116FC7"/>
                        <g mask="url(#sliderMask)">
                            <SlideContainer slide={currentSlide}>
                                {slides.map( ( value, index ) => (<text x="205" y={index * 100} key={index} className="black" pointerEvents="none">{value}</text>) )}
                            </SlideContainer>
                        </g>
                    <g transform="translate(450 185)">
                            <UpArrow onClick={slidePrev} />
                            <DownArrow onClick={slideNext} />
                        </g>
                    </svg>
                </Animated>
            </Welcome>
        </Container>
    )
}

export default Header;