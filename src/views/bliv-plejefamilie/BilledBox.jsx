import React from 'react'
import Image from 'next/image';
import { Box, Heading, Flex } from "@chakra-ui/react";

export default function BilledBox({acf}) {
  return (
    <>
        <Box 
        position="relative"
        h={"100%"}
        minH="20rem"
        maxW={"70ch"}
        minW={{base: "20rem", md:"25rem", lg:"30rem", xl: "40rem" }}
        borderRadius="0.2rem"
        overflow="hidden">
            <Image 
            src={acf.img1} 
            alt="Plejefamilie" 
            layout='fill' objectFit="cover"/>
        </Box>
    </>  
  )
}
