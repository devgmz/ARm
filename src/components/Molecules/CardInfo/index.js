import React from 'react'
import styled from 'styled-components'
import Heading from './../../Atmos/Heading/index';
import Button from './../../Atmos/Button/index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const CardInfo = () => {
  return (
    <Wrapper>
      <Heading level={2}>MovieName</Heading>
      <Button palette='primary' type='submit' width={250}>예매</Button>
    </Wrapper>
  )
}

export default CardInfo