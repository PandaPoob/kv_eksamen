import React from 'react'
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from 'next/image'

export default function OmInternatet({data}) {
  return (
    <Box display={"grid"} placeContent={"center"}>
        <Box display={"grid"} maxW="container.xl" gridTemplateColumns={{base: "1fr", lg: "1fr 1fr"}} gap="3rem" py={{base: "3rem", lg: "6rem"}} px="1rem">
            <Box display={"grid"}>
                <Heading as="h2" size="heading2">{data.overskrift}</Heading>
                <Text>{data.brodtekst}</Text>
            </Box>
            <Box minH={"22rem"} width="100%" position="relative">
                <Image alt='internaet' src={data.artikelbillede} layout="fill" objectFit='cover'/>
            </Box>
        </Box>
    </Box>
  )
}
