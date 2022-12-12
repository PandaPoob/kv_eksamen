import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image';



export default function FindOs({data}){
    return (
        <Box as="article" bg={"brand.white"} boxShadow="md" borderRadius="0.3rem" width="22rem" height={"auto"} overflow="hidden" >
            <Box display={"grid"} gap="1rem" p="2rem">
                <Heading as="h4" size="heading4">{data.overskrift}</Heading>
                <Text>{data.adresse}</Text>
            </Box> 
            <a href={data.maplink}>
                <Box width="100%" height={"12rem"} position="relative" transition={"all 0.2s ease-in"} _hover={{transform: "scale(1.02)"}}>
                    <Image src={data.mapbillede} alt="maps" layout='fill' objectFit='cover'/>
                </Box>
            </a>
        </Box>
    )
}
