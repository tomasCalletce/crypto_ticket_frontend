import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';

function Event() {
  const { id } = useParams();

  return (
    <Box width='100%' display='flex' justifyContent='center'>
      <Box width='90%' display='flex' marginTop='1rem'>
        <Box width='100%'>
          <Heading paddingLeft='1rem'>Bad bunny</Heading>
          <Box bg='#f8fafc' paddingLeft='1rem' paddingBottom='1rem' border='1px' borderColor='gray.200' borderRadius='2xl'>
            <Text>Location: hh</Text>
            <Text>City:</Text>
            <Text>Date:</Text>
            <Text>categoria:</Text>
            <Text>Edad minima:</Text>
            <Text>responsable:</Text>
            <Text>nit:</Text>
          </Box>
          <Button marginTop='1rem'>mint</Button>
        </Box>
        <Box width='100%' display='flex' justifyContent='center'>
          <Image boxSize='500px' objectFit='cover' pos src='https://bit.ly/dan-abramov' alt='Dan Abramov' rounded='md' />
        </Box>
      </Box>
    </Box>
  );
}

export default Event;
