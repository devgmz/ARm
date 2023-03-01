import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

const fontSize = ( { width, height } ) => {
  const size = width || height;
  return size ? `${size / 16}rem` : '1.25rem';
}

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;
`;

const InnerSvg = styled.img`
  width: 100%;
  height: 100%;
  & > svg {
    fill: currentcolor;
  }
`


const Icon = ( { icon, ...props } ) => {
  const svg = require(`./Icons/${icon}.svg`)
  return (
    <Wrapper {...props}>
      <InnerSvg src={svg} {...props} />
    </Wrapper>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.string,
}

export default Icon