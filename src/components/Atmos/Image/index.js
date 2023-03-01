import React from 'react'
import styled from 'styled-components'

import antman from '../../../image/antman.jpg';

const StyledImage = styled.img.attrs( {
  src: antman
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = ({ ...props }) => {
  return (
    <StyledImage />
  )
}

export default Image