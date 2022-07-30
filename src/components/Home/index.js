import React from "react";

import { Box } from '@chakra-ui/react'

import Post from "./Post";

function Home() {
 return (
    <Box width="100%" bg="white" marginBottom="1rem" paddingBottom="1rem"  >
        <Box width="100%" display="flex" justifyContent="space-around" paddingTop="1rem" >
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    </Box>
   )
}

export default Home 