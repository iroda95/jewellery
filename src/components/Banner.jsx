import React from "react";
import styled from "styled-components";


import img from '../images/banner.png'

const Img = styled('img')`
    width: 1170px;
    height: 500px;
    object-fit: cover;
    padding:2rem;
    
`

const Text = styled('p')`
    font-family: 'sans-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    width: 400px;
`
const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled('button')`
    background-color: #46c2eb;
    padding: 0.3rem 0.5rem;
    border: none;
    border-radius:10px;
    color: white;
    &:hover{
        background-color: grey;
    }
`

const Banner = () => {
return(
    <Container>
        <Img src={img} alt="" />
        <Text>We sell exquisite jewellery that complements you.      
        Contact us for amazing offers.</Text>
        <Button>Start shopping</Button>
    </Container>
)
}

export default Banner
