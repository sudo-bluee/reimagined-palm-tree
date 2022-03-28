import styled from "styled-components";


const Button = styled.a`
    display: inline-block;
    font-size: clamp(1rem, 3vw, 1.5rem);
    padding: 0.5em 1.5em;
    text-align: center;
    margin: 1em;
    background-color: #116FC7;
    border: 2px solid #116FC7;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    transition: ease-in-out 300ms;
    &:hover, &:focus{
        cursor: pointer;
        background-color: transparent;
        color: dodgerblue;
        transform: scale(105%);
    }
`

export default Button;