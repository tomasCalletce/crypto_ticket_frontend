import { useRef, useState } from 'react';
import { ContractFactory } from 'ethers';

import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

import { addToIpsf } from '../../middleware/IpfsApi';

// contract 
import abi from "../../crytoTicketsABI.json"
import byteCode from "../../crytoTicketsBitCode.json"

function Maker({ signer,wallet }) {
  const [eventHash, setEventHash] = useState('');
  const location = useRef();
  const city = useRef();
  const date = useRef();
  const categoria = useRef();
  const adadMinima = useRef();
  const responsable = useRef();
  const nit = useRef();
  const aperturaDePuertas = useRef();
  const maxCapta = useRef();
  const nftName = useRef();
  const nftSymbol = useRef();

  const clickHandler = async () => {
    const eventInformation = {
      location: location.current.value,
      city: city.current.value,
      date: date.current.value,
      categoria: categoria.current.value,
      adadMinima: adadMinima.current.value,
      responsable: responsable.current.value,
      nit: nit.current.value,
      aperturaDePuertas: aperturaDePuertas.current.value,
      maxCapta: maxCapta.current.value,
      nftName: nftName.current.value,
      nftSymbol: nftSymbol.current.value,
    };
    makeContract()
  };

  const makeContract = async () => {
        const factory = new ContractFactory(abi,byteCode);
        const res = await factory.connect(signer).deploy(wallet,maxCapta)
        console.log(res)
  }

  return (
    <Box width='100%' bg='white' marginBottom='1rem' paddingBottom='1rem'>
      <Heading color='#003865' paddingLeft='1rem'>
        Create event nft
      </Heading>
      <Box display='flex' justifyContent='center'>
        <Box width='50%' bg='#f8fafc' padding='1rem'>
          <Box marginTop='1rem' marginBottom='1rem'>
            <Text>Location: </Text>
            <Input placeholder='tomas' ref={location} />
            <Text>City: </Text>
            <Input ref={city} />
            <Text>Date: </Text>
            <Input type='datetime-local' ref={date} />
            <Text>Categoria: </Text>
            <Input ref={categoria} />
            <Text>Edad minima ingreso: </Text>
            <Input ref={adadMinima} />
            <Text>Responsable: </Text>
            <Input ref={responsable} />
            <Text>Nit: </Text>
            <Input ref={nit} />
            <Text>Apertura puertas: </Text>
            <Input ref={aperturaDePuertas} />
          </Box>
        </Box>

        <Box width='50%' bg='#f8fafc' padding='1rem'>
          <Box marginTop='1rem' marginBottom='1rem'>
            <Text>maximum capacity: </Text>
            <Input placeholder='tomas' ref={maxCapta} />
            <Text>nft name: </Text>
            <Input placeholder='tomas' ref={nftName} />
            <Text>nft symbol: </Text>
            <Input placeholder='tomas' ref={nftSymbol} />
          </Box>
          <Button onClick={clickHandler}>create NFT</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Maker;
