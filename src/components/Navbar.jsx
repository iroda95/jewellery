import React from 'react';
import logo from '../images/logo.png';
import styled from 'styled-components';

const Nav = styled('nav')`
display:flex;
justify-content:space-between;
align-items: center;
padding: 20px 0;
`

const Form = styled('form')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.06);
box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.27);
border-radius: 20px;
padding: 10px;
width: 300px;
height: 30px;

    & input{
        border: none;

    }

    & img{
        width: 25px;
        height: 25px;
    }
`

const Ul = styled('ul')`
    display: flex;
    list-style: none;
`

const Link = styled('a')`
margin: 20px;
    font-family: 'Ubuntu';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 17px;
display: flex;
align-items: center;

color: #494848;
text-decoration: none;
`

const Navbar = () => {
    return (
        <Nav>
            <a href="">
                <img src={logo} alt="" />
            </a>
            <Form>
                <input type="search" placeholder='Search...' />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxqKOlCaIC1E0SZvSHOdTcqjgyikklFCs8qKZhKkHEg&s" alt="" />


            </Form>
            <Ul>
                <li><Link href="">Our products</Link></li>
                <li><Link href="">About us</Link></li>
                <li><Link href="">Contact us</Link></li>
            </Ul>
        </Nav>
    )
}




export default Navbar
