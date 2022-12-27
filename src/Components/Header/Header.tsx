import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
  <Container>
    <Wrapper>
        Home 
        about
        <Button>Click</Button>
    </Wrapper>
  </Container>
  )
}

export default Header;

const Container = styled.div`
width:100%;
background-color: red;
`
const Wrapper = styled.div``
const Button = styled.button``