import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const styles = css`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  
  &:hover {
    text-decoration: underline;
  }
`
const StyledLink = styled( ( { ...props } ) => <Link {...props} /> )`${styles}`

const Anchor = ({ ...props }) => {
  return <StyledLink {...props} />
}

Anchor.propTypes = {
  to: PropTypes.string
}

export default Anchor