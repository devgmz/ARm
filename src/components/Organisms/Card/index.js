import React from 'react'
import styled from 'styled-components'
import CardImage from '../../Molecules/CardImage/index';
import CardInfo from '../../Molecules/CardInfo/index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`

const Card = () => {
  return (
    <Wrapper>
      <CardImage />
      <CardInfo />
    </Wrapper>
  )
}

export default Card