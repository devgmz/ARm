import React from 'react'
import styled from 'styled-components'

import Heading from '../../Atmos/Heading';
import Image from '../../Atmos/Image';
import { PropTypes } from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 400px;
`

const ImageWrapper = styled.div`
  height: 500px;

  & > img {
    background-size: 100% 100%;
  }
`

const InfoWrapper = styled.div`
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

Card.propTypes = {
  movieName: PropTypes.string,
  image: PropTypes.string,
}

export default Card