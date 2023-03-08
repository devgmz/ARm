import React from 'react'
import styled from 'styled-components'

import Card from '../../Molecules/Card/index';
import { IMAGE_BASE_URL } from '../../../api/commonAxios';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  width: 90%;
  margin: 30px auto;
  padding: 1.5rem;
  
  @media only screen and (min-width: 768px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  };

  @media only screen and (min-width: 1024px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }
  };

`

const CardGrid = ({ movie }) => {
  return (
    <Wrapper>
      {movie && movie.map( (movie, index) => (
        <Card key={index} image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null} movieName={movie.original_title} />
      ))}
    </Wrapper>
  )
}

export default CardGrid