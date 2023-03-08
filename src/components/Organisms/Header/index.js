import React from 'react'
import styled from 'styled-components'

import Navigation from '../../Molecules/Navigation'
import IconLink from './../../Molecules/IconLink/index';

const HeaderWrapper = styled.header`
  padding: 0 20px;
  overflow: auto;
  background-color: #fff;
  height: 75px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 5px 10px 0px lightgray;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  float: left;
  & > a {
    display: inline-block;
    font-size: 20px;
    padding: 10px 20px;
  }
`

const LeftMenu = styled.div`
  display: inline-flex;
  width: 150px;
  padding: 19px 0px;
  margin-left: 20px;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <IconLink to='/' icon='logo' width={36} height={36} />
      </LogoWrapper>
      <LeftMenu>
        <Navigation />
      </LeftMenu>
    </HeaderWrapper>
  )
}

export default Header