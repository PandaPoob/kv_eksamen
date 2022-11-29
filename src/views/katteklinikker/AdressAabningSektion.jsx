import React from 'react'
import { Box, Flex, Text, Heading, Link, Icon, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import { BsTelephone, BsEnvelope } from "react-icons/bs";

export default function AdressAabningSektion({data}) {
       //data = acf.kontaktoplysninger
  return (
    <Box>
        <Box as="article" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
            <Box display={"grid"} gap="1rem" pb={"1rem"}>
                <Heading as={"h3"} size="heading4">Adresse</Heading>
                <Box>
                    <Text>{data.adresse.navn}</Text>
                    <Text>{data.adresse.vej_og_nr}</Text>
                    <Text>{data.adresse.postnr_og_by}</Text>
                </Box>
            </Box>
            <Divider></Divider>
            <Box py="1rem" display="grid" gap="1rem">
                <Heading as="h3" size="heading4">Åbningstider:</Heading>
                <Flex justifyContent={"space-between"} gap="2rem" mt="1rem">
                    <Text>{data.abningstider.ugedage1}</Text>
                    <Text fontWeight={"bold"}>{data.abningstider.ugedage1_tider}</Text>
                </Flex>
                <Flex justifyContent={"space-between"} gap="2rem">
                    <Text>{data.abningstider.ugedage2}</Text>
                    <Text fontWeight={"bold"}>{data.abningstider.ugedage2_tider}</Text>
                </Flex>
                <Flex justifyContent={"space-between"} gap="2rem">
                    <Text>{data.abningstider.weekend}</Text>
                    <Text fontWeight={"bold"}>{data.abningstider.weekend_tider}</Text>
                </Flex>
            </Box>
        </Box> 
</Box>
  )
}
