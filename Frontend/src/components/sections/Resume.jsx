import React, { useState } from "react";
import Section from "../Section";
import styled from "styled-components";
import device from "../../utils/deviceSize";
import Button from "../Button";
import ContactInfo from "../ContactInfo";

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    gap: 5em;
    @media ${device.laptop}{
        flex-flow: column;
    }
`


const Row = styled.div`
    display: flex;
    margin-block: 1em 4em;
    transition: 500ms ease-in-out 300ms;
    opacity: ${props => props.animateIn ? '1' : '0'};
    transform: ${props => props.animateIn ? 'scale(1)' : 'scale(1.2)'};
`

const ResumeText = styled.p`
    font-weight: 400;
    font-size: 1.5rem;
    transition: 500ms ease-in-out;
    transition-property: opacity, transform;
    opacity: ${props => props.animateIn ? '1' : '0'};
    transform: ${props => props.animateIn ? 'translateX(0)' : 'translateX(-50%)'};
    @media ${device.mobile}{
        text-align: center;
        font-size: 1.1rem;
    }
`

const Resume = () => {
    const [ isVisible, setVisible ] = useState( false );

    return (
        <Section onVisiblityChange={setVisible} id="resume" title="Resume">
            <Wrapper>
                <ResumeText animateIn={isVisible}>
                    Self-taught Web developer, Desktop developer, passionate about creating user-friendly applications with modern technologies, has knowledge of software design principles and agile development principles.
                    A Physics graduate from SAAD Dahlab University.<br />Currently based in Tipaza, Algeria 
                </ResumeText>
                <ContactInfo animateIn={isVisible} />
            </Wrapper>
            <Row animateIn={isVisible}>
                <Button>
                    DOWNLOAD CV
                </Button>                    
            </Row>            
        </Section>
    )
}
export default Resume;