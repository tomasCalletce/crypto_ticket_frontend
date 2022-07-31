import { useRef, useState } from 'react';
import { ContractFactory } from 'ethers';
import './Maker.css';

import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

import { addToIpsf, getIpsf } from '../../../middleware/IpfsApi';
import { createCompany } from '../../../middleware/restApi';

// contract
import abi from '../../../crytoTicketsABI.json';
import byteCode from '../../../crytoTicketsBitCode.json';

function Maker({ signer, wallet }) {
  const [eventHash, setEventHash] = useState('');
  const [eventInformation, setEventInformation] = useState({
    location: '',
    city: '',
    date: '',
    categoria: '',
    adadMinima: '',
    responsable: '',
    nit: '',
    aperturaDePuertas: '',
    maxCapta: '',
    imageBase64: '',
  });
  const [addressContract, setAddressContract] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [imageRender, setImageRender] = useState('');
  // const [companyInfo, setCompanyInfor] = useState({});
  const location = useRef();
  const city = useRef();
  const date = useRef();
  const categoria = useRef();
  const adadMinima = useRef();
  const responsable = useRef();
  const nit = useRef();
  const aperturaDePuertas = useRef();
  const maxCapta = useRef();
  // const nftName = useRef();
  // const nftSymbol = useRef();

  const clickHandler = async () => {
    setEventInformation({
      location: location.current.value,
      city: city.current.value,
      date: date.current.value,
      categoria: categoria.current.value,
      adadMinima: adadMinima.current.value,
      responsable: responsable.current.value,
      nit: nit.current.value,
      aperturaDePuertas: aperturaDePuertas.current.value,
      maxCapta: maxCapta.current.value,
    });
    await makeContract();
    await addToIpsf(eventInformation, setEventHash);
    await createCompany(addressContract, responsable.current.value, eventHash);
  };

  const makeContract = async () => {
    const factory = new ContractFactory(abi, byteCode);
    const res = await factory.connect(signer).deploy(wallet, maxCapta);

    setAddressContract(res.address);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (imageBase64) => {
        setImageBase64(imageBase64.target.result);
        setEventInformation({
          imageBase64: imageBase64.target.result,
        });
        console.log(eventInformation);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

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
            <div className='container'>
              <div className='photo'>
                <img src={!imageBase64 ? 'src/asserts/images/magicBox.png' : imageBase64} alt='magic box' />
              </div>
              <span className='hiddenFileInput'>
                <input onChange={onImageChange} type='file' name='cambiar foto de perfil' accept='image/x-png,image/gif,image/jpeg' />
              </span>
            </div>
          </Box>
        </Box>

        <Box width='50%' bg='#f8fafc' padding='1rem'>
          <Box marginTop='1rem' marginBottom='1rem'>
            <Text>maximum capacity: </Text>
            <Input placeholder='tomas' ref={maxCapta} />
            {/* <Text>nft name: </Text>
            <Input placeholder='tomas' ref={nftName} />
            <Text>nft symbol: </Text>
            <Input placeholder='tomas' ref={nftSymbol} /> */}
          </Box>
          <Button onClick={clickHandler}>create NFT</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Maker;
