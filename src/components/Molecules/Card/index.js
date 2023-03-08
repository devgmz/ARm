import React from 'react'
import styled from 'styled-components'

import Heading from '../../Atmos/Heading';
import Image from '../../Atmos/Image';

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
`

const ImageWrapper = styled.div`
  height: 500px;
  width: 100%;

  & > img {
    background-size: 100% 100%;
  }
`

const InfoWrapper = styled.div`
  width: 100%;
  text-align: center;
`

const Card = ({ movieName, image }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image image={image} />
      </ImageWrapper>
      <InfoWrapper>
        <Heading>{movieName}</Heading>
      </InfoWrapper>
    </Wrapper>
  )
}

export default Card