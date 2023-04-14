import React from "react"
import styled from "styled-components"
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { ImGoogle3 } from "react-icons/im"
import { Link, useNavigate } from "react-router-dom"
import { auth, provider } from "../config"
import { signInWithPopup } from "firebase/auth"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Input = styled("input")`
  width: 500px;
  height: 30px;
  padding: 15px 20px;
  border-radius: 8px;
`
const Form = styled("form")`
  display: flex;
  margin-top: 70px;
  background-color: #c6ffb8;
  flex-direction: column;
  border-radius: 8px;
  padding: 40px;
`

const Label = styled("label")`
  margin-top: 10px;
`
const Button = styled(Link)`
  background-color: #5bb872;
  margin: 30px;
  margin-left: 100px;
  width: 300px;
  height: 45px;
  /* text-align:center; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  border-radius: 10px;
  transition: 0.4s;
  font-weight: 500;

  &:hover {
    background-color: #508b5f;
    color: #fff;
  }
`
const Text = styled("p")`
  margin-left: 350px;
`
const Text1 = styled("p")`
  margin-left: 180px;
`
const SocialNetworks = styled("div")`
  margin: 20px;
  margin-left: 140px;
  display: flex;
  gap: 40px;
`

const Logo = styled("div")`
  transition: 0.5s;
  &:hover {
    color: #039303;
  }
`

const login = ({ isAuth }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("Auth", true)
      isAuth(true)
    })
  }
  return (
    <Container>
      <Form>
        <Label for="email">Введите свой email адрес</Label>
        <Input placeholder="Email" />
        <Label for="password">Введите пароль</Label>
        <Input type="password" placeholder="Password" />
        <Text>Forgot password?</Text>
        <Button to="/">Log in</Button>
        <Text1>Or sign up using</Text1>

        <SocialNetworks>
          <Logo>
            <BsFacebook size={40} />
          </Logo>
          <Logo>
            <AiFillTwitterCircle size={45} />
          </Logo>
          <Logo onClick={signInWithGoogle}>
            <ImGoogle3 size={40} />
          </Logo>
        </SocialNetworks>
      </Form>
    </Container>
  )
}
export default login
