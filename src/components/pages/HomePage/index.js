import React, { useEffect, useState, useCallback } from 'react'

import MoreButton from './../../Molecules/MoreButton';
import Header from './../../Organisms/Header';
import MainSection from './../../Organisms/MainSection';
import CardGrid from './../../Organisms/CardGrid';

import { moviesAPI, IMAGE_BASE_URL } from '../../../api/commonAxios';

const HomePage = () => {
  const [movieData, setMovieData] = useState( [] );
  const [mainImagePath, setMainImagePath] = useState( null );
  const [paramsPage, setParamsPage] = useState( 1 );

  useEffect( () => {
    getMovieData( paramsPage );
  }, [] )

  const getMovieData = useCallback( async (paramsPage) => {
    const response = await moviesAPI.popular( paramsPage );
    setMovieData( response.data.results);
    setMainImagePath(`${IMAGE_BASE_URL}w1280${response.data.results[0].backdrop_path}`)
    setParamsPage( response.data.page );
  }, [] );

  const loadMoreClick = async () => {
    const response = await moviesAPI.popular( paramsPage + 1 );
    setMovieData([...movieData, ...response.data.results])
  }
  return (
    <>
      <Header />
      <MainSection image={mainImagePath} movie={movieData} />
      <CardGrid movie={movieData} />
      <MoreButton palette="white" color="black" border="lightgray" event={loadMoreClick} />
    </>
  );
}

export default HomePage