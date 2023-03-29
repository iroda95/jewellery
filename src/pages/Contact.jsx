import React from "react"
import styled from "styled-components"
import { AiOutlineInstagram } from "react-icons/ai"
import {GrTwitter} from "react-icons/gr"
import {AiOutlineFacebook} from "react-icons/ai"

const SocialNetworks = styled("div")`
  display: flex;
  align-items: center;
`

const Text = styled("h2")`
  margin: 0;
`

const Contact = () => {
  return (
    <div>
      <SocialNetworks>
        <AiOutlineInstagram size={50} />
        <Text>@graceful_jewellery</Text>
        <GrTwitter size={50}/>
        <Text>GracefulJewellery</Text>
        <AiOutlineFacebook size={50} />
        <Text>gracefull_jew</Text>
      </SocialNetworks>
    </div>
  )
}
export default Contact
