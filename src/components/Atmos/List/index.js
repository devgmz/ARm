import React from 'react'
import styled, { css } from 'styled-components'
import { PropTypes } from 'prop-types';

const styles = css`
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  text-decoration: none;
  list-style: none;
  color: black;
`

const Ol = styled.ol`${styles}`
const Ul = styled.ul`${styles}`

const List = ({ordered, children, ...props}) => {
  return React.createElement(ordered ? Ol : Ul, props, children)
}

List.propsTypes = {
  ordered: PropTypes.bool,
}

export default List