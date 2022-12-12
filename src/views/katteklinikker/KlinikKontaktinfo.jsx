import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import TelefonMailSektion from './TelefonMailSektion';
import AdressAabningSektion from './AdressAabningSektion';


export default function KlinikKontaktinfo({acf}) {

  return (
    <Box as="section" bg={"brand.lightGrey"} display="grid" placeContent={"center"} py={{base:"3rem", lg: "6rem"}} px="1rem">
        <Box maxW={"container.xl"}>
            <Heading as="h2" size="heading2" textAlign={"center"}>Kontakt os</Heading>
            <Box as="section" display="grid" gridTemplateColumns={{base: "1fr", md:"1fr 1fr", lg: "repeat(3, 1fr)"}} gap="3rem" alignItems={"start"}  py="3rem">
                <TelefonMailSektion data={acf.kontaktoplysninger} />
                <AdressAabningSektion data={acf.kontaktoplysninger}/>
                <Box position="relative" minH={"25rem"} width="100%" borderRadius="0.3rem" overflow={"hidden"}>
                    <Image src={acf.kontaktoplysninger.artikelbillede} alt="kattens værns app" layout='fill' objectFit='cover'/>
                </Box> 
            </Box>
        </Box>
    </Box>
  )
}
