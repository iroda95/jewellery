import React from "react"
import styled from "styled-components"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  margin:5px;
`

const Input = styled("input")`
  width: 500px;
`
const login = () => {
  return (
    <Container>
      <Input placeholder="Введите свой email адрес" />
      <Input placeholder="Введите свой  возраст" type="number" />
      <label for="birthday">Введите дату рождения</label>
      <Input id="birthday" type="date" />
      <label for="password">Введите пароль</label>
      <Input type="password" />
    </Container>
  )
}

export default login
