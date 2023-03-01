import React from 'react'
import styled, { css } from 'styled-components'
import { PropTypes } from 'prop-types';

const fontSize = (props) => `${0.75 + (1* (1 / props.level))}rem`

const styles = css`
  font-weight: ${(props) => props.weight || 'bold'};
  font-size: ${fontSize};
  line-height: 3rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ palette, theme }) => theme.palette[palette]};
`;


const Heading = styled( ( {
  level, theme, children, ...props} ) => React.createElement( `h${level}`, props, children ) )`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  palette: PropTypes.string,
  weight: PropTypes.number,
  children: PropTypes.node,
};

Heading.defaultProps = {
  level: 1,
  palette: 'black',
}

export default Heading;