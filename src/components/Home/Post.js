import React from 'react';

import { Box,Image,Heading,Text, Button } from '@chakra-ui/react'

function Post() {
  return (
    <Box width="18%" bg="#f8fafc" height="15rem" boxShadow='sm' p='2' rounded='md' border='1px' borderColor="gray.200" >
        <Box width="100" bg="lightseagreen" height="120px" rounded='md' >
            <Image boxSize='100%' objectFit="cover" pos src='https://bit.ly/dan-abramov' alt='Dan Abramov' rounded='md'/>
        </Box>
        <Heading fontSize="2xl" color="gray.600">Bad Bunny</Heading>
        <Text color="gray.400" >Atanasio,Medellin</Text>
        <Button width="100%" marginTop=".5rem" bg="#003865" color="white">comprar entrada</Button>
    </Box>
  );
}

export default Post;
