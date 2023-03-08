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
const Input = ({ type, event, ...props}) => {
  return (
    <StyledInput {...props} onChange={event} />
  )
}

Input.propsTypes = {
  type: PropTypes.string,
  height: PropTypes.number,
  event: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  height: 40,
}

export default Input