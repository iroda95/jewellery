import React from "react"
import styled from "styled-components"
import { AiOutlineInstagram } from "react-icons/ai"
import { GrTwitter } from "react-icons/gr"
import { AiOutlineFacebook } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet"

const SocialNetworks = styled("div")`
  display: flex;
  gap: 40px;
`

const Text = styled("h2")`
  margin: 0;
`

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`

const Map = styled("div")``
const Contacts = styled("div")`
  display: flex;
  justify-content: space-around;
`

const MapContent = styled(MapContainer)`
  height: 35rem;
`

const Contact = () => {
  const position = [41.271842, 69.23193]
  return (
    <Container>
      <Map>
        <MapContent center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContent>
      </Map>
      <Contacts>
        <SocialNetworks>
          <AiOutlineInstagram size={50} />
          <Text>@graceful_jewellery</Text>
        </SocialNetworks>
        <SocialNetworks>
          <GrTwitter size={50} />
          <Text>GracefulJewellery</Text>
        </SocialNetworks>
        <SocialNetworks>
          <AiOutlineFacebook size={50} />
          <Text>gracefull_jew</Text>
        </SocialNetworks>
        <SocialNetworks>
          <BsFillTelephoneFill size={50} />
          <Text>+998 99 898 88 99 </Text>
        </SocialNetworks>
      </Contacts>
    </Container>
  )
}
export default Contact
