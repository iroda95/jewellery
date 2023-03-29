import React from "react"
import styled from "styled-components"

const Container = styled("div")`
  width: 100%;
  height: 15rem;
  margin-top:30px;
  background-color: #55bbe4;
  display: flex ;
  justify-content: center;
  align-items: center;
  flex-direction: column  ;
  gap: 20px;
`
const Text = styled("p3")`
  font-family: 'Ubuntu';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;
`
const Text2 = styled("p3")`
  font-family: 'Ubuntu';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;
`
const Img = styled("img")`
  width:140px;
  height:70px;
`

const Footer = () => {
  return <Container>
    <Text>Call/text: 089734442 </Text>
    <Text2>Follow us on our social media handles</Text2>
    <Img src="https://static.vecteezy.com/system/resources/previews/003/775/685/original/social-media-icons-set-facebook-instagram-twitter-logos-free-vector.jpg"
     alt=""/> 
    </Container>
  
}

export default Footer
