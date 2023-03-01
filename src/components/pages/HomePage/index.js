import React from 'react'

import Header from './../../Organisms/Header/index';
import MainSection from './../../Organisms/MainSection/index';
import MoreButton from './../../Molecules/MoreButton/index';
import Card from './../../Organisms/Card/index';

const HomePage = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Card />
      <MoreButton palette='white' color='black' border='lightgray' />
    </>
  )
}

export default HomePage