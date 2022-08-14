import React from "react";
import styled from "styled-components";
import device from "../utils/deviceSize";
// Icons
import AtIcon from "../icons/at.svg"
import PhoneIcon from "../icons/phone.svg"
import LocationIcon from "../icons/location.svg"

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    font-size: 1.5rem;
    gap: 1.5em;
    transition: 500ms ease-in-out;
    transition-property: opacity, transform;
    opacity: ${props => props.animateIn ? '1' : '0'};
    transform: ${props => props.animateIn ? 'translateX(0)' : 'translateX(50%)'};
    @media ${device.mobile}{
        font-size: 1rem;
        word-break: break-all;
    }

`

const Item = styled.div`
    display: flex;
    gap: 1em;
`

const ItemText = styled.p`
    display: inline-block;
    font-weight: 300;

`

const ItemIcon = styled.div`
    width: 1em;
    height: 1em;
    display: flex;
    justify-content: center;

    & svg {
        fill: #292929;
    }
`


const ContactInfo = ( { animateIn }) => (
    <Wrapper animateIn={animateIn} >
        <Item>
            <ItemIcon>
                <AtIcon />
            </ItemIcon>
            <ItemText>
                abdelhakim.merzoug00@gmail.com
            </ItemText>
        </Item>
        <Item>
            <ItemIcon>
                <PhoneIcon />
            </ItemIcon>
            <ItemText>
                +213 555 84 26 22
            </ItemText>
        </Item>
        <Item>
            <ItemIcon>
                <LocationIcon />
            </ItemIcon>
            <ItemText>
                Villa 10 Cite 20 Logts MERAD, Tipaza
            </ItemText>
        </Item>
    </Wrapper>
)

export default ContactInfo;