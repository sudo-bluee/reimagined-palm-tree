import React from "react";
import Section from "../Section";
import styled from "styled-components";
import Logo from "../Logo";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 5rem;
`

const Blog = () => {
    return (
        <Section id="blog" title="Blog" description="Soon">
            <Wrapper>
                <Logo href="#home" animate />
            </Wrapper>
        </Section>
    )
}

export default Blog;