import React, { useState } from "react";
import Section from "../Section";
import useIntersectionObserver from "../../utils/IntersectionObserver";
import styled from "styled-components"
import TagsIcon from "../../icons/tags.svg"
import device from "../../utils/deviceSize";

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 2em;
    margin: 2em 0;
    @media ${device.mobile}{
        flex-flow: column;
        gap: 4em;
    }
`

const Column = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column;
    gap: 2em;
`

const ColumnContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 1.5em;
    height : 100%;
`

const Title = styled.h3`
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    opacity: ${props => props.animateIn ? 1 : 0};
    transform: ${props => props.animateIn ? 'scale(1)' : 'scale(1.5)' };
    transition: var(--title-duration) ease-in-out var(--title-duration);
`

const RowDevider = styled.div`
    align-self: stretch;
    padding-block: 4em 0;
    @media ${device.mobile}{
        display: none;
    }
`

const Divider = styled.svg`
    height: 100%;
`

const DividerLine = styled.line`
    stroke: #6A6A6A;
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
`

const SkillContainer = styled.div`
    --sorted-delay : ${props => props.sortIndex * 300}ms;
    --skill-duration : calc(700ms + var(--sorted-delay));
    display: flex;
    flex-flow: row nowrap;
    font-size: 1.3rem;
    gap: 1em;
    align-items: center;
    justify-content: space-between;
    opacity: ${props => props.isVisible ? 1 : 0};
    transform: ${props => props.isVisible ? 'translateX(0%)' : 'translateX(30%)' };
    transition: ${props => props.isVisible ? 'var(--skill-duration) ease-in-out var(--title-duration)' : 'none' } ;
`

const SkillIcon = styled(TagsIcon)`
    height: 2rem;
`

const SkillText = styled.p`
    display: inline-block;
    font-weight: 600;
    flex: 3;
`

const Skill = ( props ) => (
    <SkillContainer isVisible={props.animateIn} sortIndex={props.delayIndex}>
        <SkillIcon />
        <SkillText>{props.text}</SkillText>
    </SkillContainer>
)

const LanguageSkill = styled.div`
    --sorted-delay : ${props => props.sortIndex * 200}ms;
    --language-duration : calc(700ms + var(--sorted-delay));
    display: flex;
    flex-flow: row nowrap;
    font-size: 1.5rem;
    gap: 0.5em;
    align-items: center;
    justify-content: space-between;
    transition: ${props => props.isVisible ? 'var(--language-duration) ease-in-out calc(var(--title-duration))' : 'none' };
    opacity: ${props => props.isVisible ? 1 : 0};
    transform: ${props => props.isVisible ? 'translateX(0%)' : 'translateX(-30%)' };
`
const LanguageName = styled.p`
    display: inline-block;
    white-space: nowrap;
    font-weight: 400;
    flex: 1;
`

const ProgressBar = styled.div`
    --progress-duration : 400ms;
    flex: 3;
    height: 1em;
    border-radius: 2em;
    background-color: #E5E5E5;
    &::after{
        display: block;
        content: "";
        height: 100%;
        border-radius: inherit;
        background-color: #292929;
        transition: ${props => props.isVisible ? 'var(--progress-duration) ease-in-out calc(var(--title-duration) + var(--language-duration))' : 'none' };
        width: ${props => ( props.isVisible ? props.progress : 0 ) * 100}%;
    }
`
const Language = ( props ) => (
            <LanguageSkill sortIndex={props.delayIndex} isVisible={props.animateIn}>
                <LanguageName>{props.name} :</LanguageName>
                <ProgressBar isVisible={props.animateIn} progress={ props.progress } />
            </LanguageSkill>
)

const About = () => {
    const [ isVisible, setVisible ] = useState( false );
    const languages = [
        { 
            name : "English",
            percentage : 0.75
        },
        { 
            name : "Arabic",
            percentage : 0.85
        },
        { 
            name : "French",
            percentage : 0.3
        }
    ]

    const skills = [
        'Experienced with Javascript, CSS, C#, C++ C',
        'Familiar with MERN Stack ( MongoDB, ExpressJS, React, NodeJS )',
        'Can maintain projects with JQuery or vanilla javascript',
        'MySQL, PostgreSQL / MongoDB',
        'Git, GitHub, VSCode, Terminal, VIM',
        'Team collaboration and problem solving',
    ]

    return (
        <Section onVisiblityChange={setVisible} id="about" title="About Me" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel? Some other information here.">
            <Wrapper>
                <Column>
                    <Title animateIn={isVisible}>Languages:</Title>
                    <ColumnContent>
                        { languages.map( ( { name, percentage }, index ) => ( <Language key={index} name={name} progress={percentage} animateIn={isVisible} delayIndex={index} /> ) ) }
                    </ColumnContent>
                </Column>
                <RowDevider>
                    <Divider preserveAspectRatio="none" viewBox="0 0 2 100">
                        <DividerLine x1="0" y1="0" x2="0" y2="100" />
                    </Divider>
                </RowDevider>
                <Column>
                    <Title animateIn={isVisible}>Skills:</Title>
                    <ColumnContent>
                    { skills.map( ( value, index ) => <Skill key={index} text={value} animateIn={isVisible} delayIndex={index} /> ) }
                    </ColumnContent>
                </Column>
            </Wrapper>
        </Section>
    )
}

export default About;