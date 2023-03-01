import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

const StyledInput = styled.input`
  width: 200px;
  height: 40px;
  font-size: ${props => `${props.height / 35}rem`};
  font-weight: 700;
  line-height: 40px;
  color: black;
`
const Input = ({ type, ...props}) => {
  return (
    <StyledInput {...props} />
  )
}

Input.propsTypes = {
  type: PropTypes.string,
  height: PropTypes.number,
}

Input.defaultProps = {
  type: 'text',
  height: 40,
}

export default Input