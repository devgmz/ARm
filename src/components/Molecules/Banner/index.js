import React from 'react'
import styled from 'styled-components'
import Image from './../../Atmos/Image/index';
import Heading from './../../Atmos/Heading/index';
import Paragraph from './../../Atmos/Paragraph/index';

const Description = styled.div`
  position: absolute;
  max-width: 500px;
  bottom: 2rem;
  margin-left: 2rem;
`

const Banner = () => {
  return (
    <>
      <Image />
      <Description>
        <Heading level={1} palette="white">
          Title
        </Heading>
        <Paragraph palette="white">
          Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
          Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
          Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
          drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
          candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
          muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé
          chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy
          croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot
          cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake
          dragée pie.
        </Paragraph>
      </Description>
    </>
  );
}

export default Banner