import React from 'react'
import styled from 'styled-components'

import Banner from './../../Molecules/Banner/index';

const SectionWrapper = styled.div`
  height: 500px;
  background-size: cover;
  background-position: center;
  width: 100%;
  position: relative;
  margin-bottom: 3rem;
`

const MainSection = ({ image, movie }) => {
  return (
    <SectionWrapper>
      <Banner image={image} movie={movie} />
    </SectionWrapper>
  )
}

export default MainSection