import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;
export const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const moviesInstance = axios.create( {
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  }
} )

export const moviesAPI = { 
  popular: ( page ) => moviesInstance.get( 'movie/popular', {
    params: {
      page: page
    }
  } ),
  
  now_playing: (page) => moviesInstance.get( 'movie/now_playing', {
    params: {
      page: page
    }
  })
}