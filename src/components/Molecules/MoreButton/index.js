import React from 'react'
import styled from 'styled-components';

import Button from './../../Atmos/Button/index';

const StyledMore = styled.div`
  display: flex;
  justify-content: center;
`
const MoreButton = ({ ...props }) => {
  return (
    <StyledMore {...props}>
      <Button {...props}>더보기</Button>
    </StyledMore>
  )
}

export default MoreButton