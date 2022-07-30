import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import { Box } from '@chakra-ui/react'

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

import Home from '../Home';
import Maker from "../Maker"
import About from '../About ';

function App() {
  return (
    <Box w="100%" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center">

      <Header/>
      <BrowserRouter>
             <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/maker/" element={<Maker/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
      </BrowserRouter>
      <Footer/>
      
    </Box>
    );
}

export default App;
