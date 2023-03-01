import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import theme from './themes/default';

import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import NotFound from './pages/NotFoundPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie' element={<MoviePage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
