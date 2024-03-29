import React from "react"
import { data, neckleces, bracelets } from "./data"
import styled from "styled-components"




const Box = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;
`

const Block = styled("div")`
  text-align: center;
  width: 100%;
  margin: 0 auto;
`



const Abc = styled("p")`
  font-family: "Ubuntu";
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
`

const Text2 = styled("p")`
  font-family: "Ubuntu";
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
`

const Card = styled("div")`
  border: 0.7px solid antiquewhite;
  border-radius: 10px;
  padding: 4px 4px;
  width: 350px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .5s;
  -webkit-box-shadow: 0px 0px 30px 5px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 30px 5px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 30px 5px rgba(34, 60, 80, 0.2);
  &:hover {
    transform: scale(103%, 103%);
  }
`
const Img = styled("img")`
  width: 100%;
`
const CardButton = styled("button")`
  border: none;
  background-color: #d1c2a5;
  border-radius: 10px;
  padding: 5px 1rem;
  transition: 0.4s;
  &:hover {
    background-color: grey;
  }
`

const Products = () => {
  return (
    <section>
      
       
        <Text2>Earrings</Text2>
     

      <Box>
        {data.map((item, index) => (
          <Card key={index}>
            <Img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <CardButton>Buy Now</CardButton>
          </Card>
        ))}
      </Box>

      <Text2>Necklaces</Text2>
      <Box>
        {neckleces.map((item, index) => (
          <Card key={index}>
            <Img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <CardButton>Buy Now</CardButton>
          </Card>
        ))}
      </Box>

      <Text2>Bracelets</Text2>
      <Box>
        {bracelets.map((item, index) => (
          <Card key={index}>
            <Img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <CardButton>Buy Now</CardButton>
          </Card>
        ))}
      </Box>
    </section>
  )
}

export default Products
