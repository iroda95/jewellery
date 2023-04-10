import React from "react"
import styled from "styled-components"

import img from "../images/banner.png"

const Img = styled("img")`
  width: 1200px;
  height: 500px;
  object-fit: cover;
  padding: 2rem;
  margin: 0 auto;
`
const Container = styled("div")`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4rem;
`
const Text = styled("h2")`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  letter-spacing: 0.01em;

  color: #494848;
`
const Button = styled("button")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: white;
  border: none;
  background-color: #3ab6cc;
  width: 150px;
  height: 40px;
  border-radius: 4px;

  &:hover {
    background-color: grey;
  }
`

const Banner = () => {
  return (
    <Container>
      <Img src={img} alt="" />
      <Text>
        We sell exquisite jewellery that complements you. Contact us for amazing
        offers
      </Text>
      <Button>Start Shopping</Button>
    </Container>
  )
}

export default Banner 
