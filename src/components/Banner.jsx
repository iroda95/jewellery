import React from "react";
import styled from "styled-components";


import img from '../images/banner.png'

const Img = styled('img')`
    width: 1170px;
    height: 500px;
    object-fit: cover;
    padding:2rem;
    margin: 0 auto;
    
`
const Container = styled('div')`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Banner = () => {

    return(
    <Container>
        <Img src={img} alt="" />
    </Container>
    )
}

export default Banner
