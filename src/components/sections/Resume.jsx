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
    margin-block: 5em 2em; 
    gap: 5em;
    @media ${device.laptop}{
        flex-flow: column;
        margin-block: 2em;
    }
`


const Row = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-start;
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellendus sunt officiis exercitationem harum perferendis voluptatum sequi omnis dignissimos nisi velit! Adipisci amet illum, pariatur autem voluptate accusantium, numquam animi aut quis ex ea eligendi dolores veritatis. Incidunt, quae dicta.
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