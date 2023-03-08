import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

const StyledImage = styled.img`
  background: url(${props => props.image});
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = ({ image }) => {
  return (
    <StyledImage image={image} />
  )
}

Image.propTypes = {
  image: PropTypes.string,
}

export default Image