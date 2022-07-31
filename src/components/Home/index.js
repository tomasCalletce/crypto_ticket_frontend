import React from 'react';

import { Box } from '@chakra-ui/react';

import Post from './Post';

function Home({ events }) {
  return (
    <Box width='100%' bg='white' marginBottom='1rem' paddingBottom='1rem'>
      <Box width='100%' display='flex' justifyContent='space-around' paddingTop='1rem'>
        {events?.map((event, index) => {
          return <Post event={event} key={index} />;
        })}
      </Box>
    </Box>
  );
}

export default Home;
