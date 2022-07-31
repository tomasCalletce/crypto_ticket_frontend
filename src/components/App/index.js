import {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { ethers } from 'ethers';


import { Box } from '@chakra-ui/react';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

import Home from '../Home';
import Maker from '../Maker';
import About from '../About ';
import Event from '../Event';

import { getCompany, getAllCompany } from '../../middleware/restApi';

function App() {
  getCompany('1');
  getAllCompany();

  const [wallet,setWallet] = useState()
  const [provider,setProvider] = useState()
  const [walletConnected,setWalletConnected] = useState()
  const [signer,setSigner] = useState()


  const requestAccount = async(provider) => {
    if(window.ethereum) {
      try {
        const accounts = await provider.send("eth_requestAccounts", [])
        setWallet(accounts[0])
      } catch (error) {
        console.log('Error connecting...');
      }
    } else {
      alert('Meta Mask not detected');
    }
  }

  const connectWallet = async() => {
    console.log("entra")
    if(typeof window.ethereum !== 'undefined') {
      console.log("super entra")
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await requestAccount(provider)
      const signer = provider.getSigner()
      setProvider(provider)
      setSigner(signer)
      setWalletConnected(true)
    }
  }

  
  return (
    <Box w="100%" minHeight="100vh" >

      <Header connect={connectWallet} wallet={wallet} isConnected={walletConnected} />
      <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={'/event/:id'} element={<Event />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/maker" element={<Maker signer={signer} wallet={wallet} />}/>
            </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App;
