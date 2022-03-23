import styled from "styled-components";


const Button = styled.a`
    display: inline-block;
    font-size: clamp(1rem, 1.5vw, 2rem);
    padding: 0.5em 1.5em;
    margin: 1em;
    background-color: #116FC7;
    border-radius: 4px;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    transition: background-color 300ms;
    &:hover, &:focus{
        cursor: pointer;
        background-color: #0085FF;
    }
`

export default Button;