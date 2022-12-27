import React from 'react'
import styled from 'styled-components';

const ProspCard = () => {
  return (
    <Container>
        <Card>
            Congratulation
        </Card>
    </Container>
  )
}

export default ProspCard;

const Container = styled.div`

`
const Card = styled.div`
  background-color: red;
  padding: 20px 30px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;

`;
