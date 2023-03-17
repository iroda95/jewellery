import React from "react"
import styled from "styled-components"
import footerbg from "../images/footer.png"

const Container = styled("div")`
  background-image: url(${footerbg});
  height: 400px;
  margin-top: 100px;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 0 100px;
`
const Text = styled("p")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  margin: 40px;
`
const Text1 = styled("p")`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  margin: 30px;
`
const Box = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

const Footer = () => {
  return (
    <Container>
      <Box>
        <Text>Contact us</Text>
        <Text1>Call / text : 0712345678</Text1>
      </Box>
    </Container>
  )
}

export default Footer
