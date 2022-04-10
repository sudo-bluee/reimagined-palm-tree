import React, {useState} from "react";
import styled from "styled-components";
import Section from "../Section";


const FormContainer = styled.form`
    display: flex;
    flex-flow: row wrap;
    padding: 5em 0;
    gap: 4rem;
    justify-content: space-around;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1em;
    border: none;
    font-family: 'Open Sans', sans-serif;
    box-shadow: 0 0 0.7rem 0.1rem rgba(0 59 180 / .2);
`

const InputsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    flex: 2;
    transition: ease-in-out 700ms var(--title-duration);
    transition-property: transform, opacity;
    transform: ${props => props.animateIn ? 'translateX(0)' : 'translateX(5%)' };
    opacity: ${props => props.animateIn ? 1 : 0};
`

const TextArea = styled.textarea`
    flex: 3 1 20rem;
    max-height: 30rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8rem;
    padding: 1em;
    box-shadow: 0 0 0.7rem 0.1rem rgba(0 59 180 / .2);
    border: none;
    transition: ease-in-out 700ms calc(var(--title-duration) + var(--description-duration));
    transition-property: transform, opacity;
    transform: ${props => props.animateIn ? 'translateX(0)' : 'translateX(-5%)' };
    opacity: ${props => props.animateIn ? 1 : 0};
`

const Contact = () => {
    const [ isVisible, setVisible ] = useState( false );

    return (
    <Section onVisiblityChange={setVisible} id="contact" title="Contact Me" description="Get in touch">
        <FormContainer>
                <InputsContainer animateIn={isVisible} >
                    <Input type="text" placeholder="Subject title" />
                    <Input type="text" placeholder="Full name" />
                    <Input type="email" placeholder="Email" />
                </InputsContainer>
                <TextArea animateIn={isVisible} placeholder="Your message ..."/>
        </FormContainer>
    </Section>
    )
}

export default Contact;