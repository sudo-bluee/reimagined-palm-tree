import React from "react";
import Section from "../Section";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 2rem;
`

const Blog = () => {
    return (
        <Section id="blog" title="Blog" description="Soon">
            <div>
                Items
            </div>
        </Section>
    )
}

export default Blog;