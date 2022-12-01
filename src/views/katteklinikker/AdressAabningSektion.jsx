import React from 'react'
import { Box, Flex, Text, Heading, Link, Icon, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import { BsTelephone, BsEnvelope } from "react-icons/bs";

export default function AdressAabningSektion({data}) {
       //data = acf.kontaktoplysninger
       const abningstider = data.abningstider
       const abningstiderArr = Object.entries(abningstider).map((e) => ({
         id: e[0],
         tider: e[1],
       }));
     
       //remove empty entries (false)
       const cleanAbningstiderArr = abningstiderArr.filter((t) => t.tider !== false);
     
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
                {cleanAbningstiderArr.map((t)=> (
                    <Flex key={t.id} justifyContent={"space-between"} gap="2rem">
                        <Text>{t.tider.dage}</Text>
                        <Text fontWeight={"bold"}>{t.tider.tider}</Text>
                    </Flex>
                ))}
            </Box>
        </Box> 
</Box>
  )
}
