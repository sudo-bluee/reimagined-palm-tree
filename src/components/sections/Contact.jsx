import React, {useState} from "react";
import styled from "styled-components";
import Section from "../Section";
import Button from "../Button";


const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
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
    justify-content: flex-start;
    gap: 1rem;
    flex: 2;
    transition: ease-in-out 500ms var(--title-duration);
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
    transition: ease-in-out 500ms calc(var(--title-duration) + var(--description-duration));
    transition-property: transform, opacity;
    transform: ${props => props.animateIn ? 'translateX(0)' : 'translateX(-5%)' };
    opacity: ${props => props.animateIn ? 1 : 0};
`

const SubmitButton = styled.input`
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-family: 'Open Sans', sans-serif;
    padding: 0.5em 1.5em;
    margin: 2em;
    text-align: center;
    background-color: #292929;
    border: none;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    transition: ease-in-out 300ms;
    transition-property: opacity, transform;
    opacity: ${props => props.animateIn ? 1 : 0};
    transform: ${props => props.animateIn ? 'scale(1)' : 'scale(1.5)'};

    &:hover, &:active{
        cursor: pointer;
        transform: scale(1.2);
    }
`

const Contact = () => {
    const [ isVisible, setVisible ] = useState( false );

    return (
    <Section onVisiblityChange={setVisible} id="contact" title="Contact Me" description="Get in touch">
        <Container>
                <InputsContainer animateIn={isVisible} >
                    <Input type="text" placeholder="Subject title" />
                    <Input type="text" placeholder="Full name" />
                    <Input type="email" placeholder="Email" />
                </InputsContainer>
                <TextArea animateIn={isVisible} placeholder="Your message ..."/>
        </Container>
        <SubmitButton animateIn={isVisible} value="Send" type="submit" />
    </Section>
    )
}

export default Contact;