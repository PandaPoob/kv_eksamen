import React from 'react'
import { Box, Flex, Text, Heading, Link, Icon, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import { BsTelephone, BsEnvelope } from "react-icons/bs";


export default function KlinikKontaktinfo({acf}) {
  return (
    <Box as="section" bg={"brand.lightGrey"} display="grid" placeContent={"center"}>
        <Box maxW={"container.lg"}>
            <Heading>Kontakt os</Heading>
            <Box  display="grid" gridTemplateColumns={{base: "1fr", lg: "repeat(3, 1fr)"}}>
                <Box bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
                    <Heading as={"h3"} size="heading3">
                        <Icon color="brand.redCta" w={8} h={8} as={BsTelephone} />
                        {acf.kontaktoplysninger.telefonnummer}
                    </Heading>
                    <Divider></Divider>
                    <Heading as="h3" size="heading3">Telefontider:</Heading>
                    <Flex justifyContent={"space-between"} gap="1rem">
                        <Text>{acf.kontaktoplysninger.telefontider.ugedage1}</Text>
                        <Text fontWeight={"bold"}>{acf.kontaktoplysninger.telefontider.ugedage1_tider}</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"} gap="1rem">
                        <Text>{acf.kontaktoplysninger.telefontider.ugedage2}</Text>
                        <Text fontWeight={"bold"}>{acf.kontaktoplysninger.telefontider.ugedage2_tider}</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"} gap="1rem">
                        <Text>{acf.kontaktoplysninger.telefontider.weekend}</Text>
                        <Text fontWeight={"bold"}>{acf.kontaktoplysninger.telefontider.weekend_tider}</Text>
                    </Flex>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
