import React from 'react'
import styled from 'styled-components'

import Heading from '../../Atmos/Heading';
import Image from './../../Atmos/Image/index';

const Wrapper = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 8px;
`

const RankWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 10px;
  font-style: italic;
`;

const CardImage = () => {
  return (
    <Wrapper>
      <RankWrapper>
        <Heading palette='white' weight={300}>
          1
        </Heading>
      </RankWrapper>
      <Image />
    </Wrapper>
  )
}

export default CardImage