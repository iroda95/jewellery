import React from "react"
import logo from "../images/logo.png"
import styled from "styled-components"
import banner from "../images/banner.png"
import { Link, useNavigate } from "react-router-dom"

const Nav = styled("nav")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`
const Form = styled("form")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.27);
  border-radius: 20px;
  padding: 10px;
  width: 300px;
  height: 30px;

  & input {
    border: none;
  }
  & img {
    width: 25px;
    height: 25px;
  }
`
const Ul = styled("ul")`
  display: flex;
  list-style: none;
  gap: 3em;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #494848;
  text-decoration: none;
`
const Links = styled(Link)`
  font-size:14px;
  color: green;
`
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Form>
        <input type="search" placeholder="Search..." />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxqKOlCaIC1E0SZvSHOdTcqjgyikklFCs8qKZhKkHEg&s"
          alt=""
        />
      </Form>
      <Ul>
        <li>
          <Links to="/">Home</Links>
        </li>
        <li>
          <Links to="/our_products">Our products</Links>
        </li>
        <li>
          <Links to="/contact">Contact us</Links>
        </li>
        <li>
          <Link to={'/signin'}>Sign in</Link>
        </li>
      </Ul>
    </Nav>   
  )
}
export default Navbar
