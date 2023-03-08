import React from 'react'
import styled from 'styled-components'

import Image from './../../Atmos/Image/index';
import Heading from './../../Atmos/Heading/index';
import Paragraph from './../../Atmos/Paragraph/index';
import { PropTypes } from 'prop-types';

const Wrapper = styled.div`
  height: 100%;
  & > img {
    background-size: 100% 100%;
  }
`

const Description = styled.div`
  position: absolute;
  max-width: 500px;
  bottom: 2rem;
  margin-left: 2rem;
`

const Banner = ({ image, movie}) => {
  return (
    <Wrapper>
      <Image image={image} />
      <Description>
        <Heading level={1} palette="white">
          {movie && movie[0]?.original_title}
        </Heading>
        <Paragraph palette="white">
          {movie && movie[0]?.overview}
        </Paragraph>
      </Description>
    </Wrapper>
  );
}

Banner.propTypes = {
  image: PropTypes.string,
  movie: PropTypes.array,
}

export default Banner