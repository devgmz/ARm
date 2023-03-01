import React from 'react'
import styled from 'styled-components';

import Anchor from './../../Atmos/Anchor/index';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;

  > :not(:first-child) {
    margin-left: 2rem;
  }
`;

const Navigation = ({ ...props }) => {
  return (
    <Nav {...props}>
      <li><Anchor to='/'>홈</Anchor></li>
      <li><Anchor to='/movie'>영화</Anchor></li>
    </Nav>
  );
}

export default Navigation;