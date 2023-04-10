import React from "react"
import styled from "styled-components"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Input = styled("input")`
  width: 500px;
  height: 30px;
  padding: 5px;
  border-radius: 8px;
`
const Form=styled('form')`
  display: flex;
  margin-top: 70px;
  background-color: #7d757f;
  flex-direction: column;
  border-radius: 8px;
  padding: 40px;
`

const Label= styled('label')`
  margin-top: 10px;
`

const login = () => {
  return (
    <Container>
      <Form>
        <Label for="email">Введите свой email адрес</Label>
        <Input placeholder="email" />
        <Label for="age">Введите свой возраст</Label>
        <Input placeholder="age" type="number" />
        <Label for="birthday">Введите дату рождения</Label>
        <Input id="birthday" type="date" />
        <Label for="password">Введите пароль</Label>
        <Input type="password" />
      </Form>
    </Container>
  )
}
export default login
