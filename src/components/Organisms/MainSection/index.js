import React from 'react'
import styled from 'styled-components'

import Banner from './../../Molecules/Banner/index';
  

const SectionWrapper = styled.div`
  height: 500px;
  background-image: url();
  background-size: 100%, cover;
  background-position: center, center;
  width: 100%;
  position: relative;
  margin-bottom: 3rem;
`

const MainSection = () => {
  return (
    <SectionWrapper>
      <Banner />
    </SectionWrapper>
  )
}

export default MainSection