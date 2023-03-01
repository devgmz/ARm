import React from 'react'
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';

const styles = css`
  width: ${props => `${props.width}px`};
  height: 40px;
  border-radius: 4px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
  border: 1px solid ${props => props.border};
  font-size: ${props => `${props.height / 40 }rem`};
  background-color: ${( { palette, theme } ) => theme.palette[palette]};

  &:hover {
    background-color: ${({ palette, theme }) => darken(0.05, theme.palette[palette])};
  }
`;

const StyledButton = styled.button`${styles}`;

const Button = ( {type, ...props } ) => {
  return (
    <StyledButton type={type} {...props} />
  )
}

Button.propTypes = {
  type: PropTypes.string,
  palette: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

Button.defaultProps = {
  type: 'button',
  palette: 'primary',
  color: 'white',
  height: 40,
  width: 100,
}


export default Button;