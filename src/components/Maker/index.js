import {useRef} from "react";

import { Box, Button, Heading,Input, Text } from '@chakra-ui/react'


function Maker() {

    const location = useRef()
    const city = useRef()
    const date = useRef()
    const categoria = useRef()
    const adadMinima = useRef()
    const responsable = useRef()
    const nit = useRef()
    const aperturaDePuertas = useRef()
    const maxCapta = useRef()
    const nftName = useRef()
    const nftSymbol = useRef()

    const clickHandler = ()=>{
        const eventInfo = {
            location,
            city,
            date,
            categoria,
            adadMinima,
            responsable,
            nit,
            aperturaDePuertas,
            maxCapta,
            nftName,
            nftSymbol
        }
        console.log(eventInfo)
    }
    

 return (
    <Box width="100%" bg="white" marginBottom="1rem" paddingBottom="1rem"   >
        <Heading color="#003865" paddingLeft="1rem">Create event nft</Heading>
        <Box display="flex" justifyContent="center">
            <Box width="50%" bg="#f8fafc" padding="1rem">
            
                <Box marginTop="1rem" marginBottom="1rem"  >
                    <Text>Location: </Text>
                    <Input placeholder="tomas"/>
                    <Text>City: </Text>
                    <Input/>
                    <Text>Date: </Text>
                    <Input type="datetime-local"/>
                    <Text>Location: </Text>
                    <Input/>
                    <Text>Categoria: </Text>
                    <Input/>
                    <Text>Edad minima ingreso: </Text>
                    <Input/>
                    <Text>Responsable: </Text>
                    <Input/>
                    <Text>Nit: </Text>
                    <Input/>
                    <Text>Apertura puertas: </Text>
                    <Input/>
                </Box>
            </Box>

            <Box width="50%" bg="#f8fafc" padding="1rem">
                <Box marginTop="1rem" marginBottom="1rem"  >
                    <Text>maximum capacity: </Text>
                    <Input placeholder="tomas"/>
                    <Text>nft name: </Text>
                    <Input placeholder="tomas"/>
                    <Text>nft symbol: </Text>
                    <Input placeholder="tomas"/>
                </Box>
                    <Button onClick={clickHandler}>create NFT</Button>
            </Box>

        </Box>

    </Box>
   )
}

export default Maker