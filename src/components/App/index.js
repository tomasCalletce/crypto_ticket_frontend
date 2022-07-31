import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

import Home from '../Home';
import Maker from '../Maker';
import About from '../About ';
import Event from '../Event';

import { getCompany } from '../../middleware/restApi';

function App() {
  getCompany();

  return (
    <Box w='100%' minHeight='100vh'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={'/event/:id'} element={<Event />} />
          <Route path='/about' element={<About />} />
          <Route path='/maker' element={<Maker />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App;
