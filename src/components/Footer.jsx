import React from "react"
import styled from "styled-components"
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { ImGoogle3 } from "react-icons/im"

const Container = styled("div")`
  width: 100%;
  height: 15rem;
  margin-top: 30px;
  background-color: #5d595972;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`
const SocialNetworks = styled("div")`
  margin: 20px;
  display: flex;
  gap: 40px;
  justify-content: center;
`

const Logo = styled("div")`
  transition: 0.5s;
  &:hover {
    color: #798080;
  }
`
const Text = styled("p3")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
`
const Text2 = styled("p3")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
`

const Footer = () => {
  return (
    <Container>
      <Text>Call/text: 089734442 </Text>
      <Text2>Follow us on our social media handles</Text2>

      <SocialNetworks>
        <Logo>
          <BsFacebook size={40} />
        </Logo>
        <Logo>
          <AiFillTwitterCircle size={45} />
        </Logo>
        <Logo>
          <ImGoogle3 size={40} />
        </Logo>
      </SocialNetworks>
    </Container>
  )
}

export default Footer
