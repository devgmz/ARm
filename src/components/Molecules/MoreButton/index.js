import React from 'react'
import styled from 'styled-components';

import Button from './../../Atmos/Button/index';
import { PropTypes } from 'prop-types';

const StyledMore = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`
const MoreButton = ({ ...props }) => {
  return (
    <StyledMore {...props}>
      <Button {...props}>더보기</Button>
    </StyledMore>
  )
}

MoreButton.propTypes = {
  event: PropTypes.func,
}

export default MoreButton