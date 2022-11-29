import React from 'react'
import { Box, Flex, Text, Heading, Link, Icon, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import { BsTelephone, BsEnvelope } from "react-icons/bs";

export default function TelefonMailSektion({data}) {
    //data = acf.kontaktoplysninger
  return (
    <Box display="grid" gap="1rem">
        <Box as="article" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
            <Flex gap="1rem" alignItems={"center"} pb="1rem" justifyContent={"center"}>
                <Icon color="brand.redCta" w={8} h={8} as={BsTelephone} />
                <Heading as={"h3"} size="heading4">{data.telefonnummer}</Heading>
            </Flex>
            <Divider></Divider>
            <Box py="1rem" display="grid" gap="1rem">
                <Heading as="h3" size="heading4">Telefontider:</Heading>
                <Flex justifyContent={"space-between"} gap="2rem" mt="1rem">
                    <Text>{data.telefontider.ugedage1}</Text>
                    <Text fontWeight={"bold"}>{data.telefontider.ugedage1_tider}</Text>
                </Flex>
                <Flex justifyContent={"space-between"} gap="2rem">
                    <Text>{data.telefontider.ugedage2}</Text>
                    <Text fontWeight={"bold"}>{data.telefontider.ugedage2_tider}</Text>
                </Flex>
                <Flex justifyContent={"space-between"} gap="2rem">
                    <Text>{data.telefontider.weekend}</Text>
                    <Text fontWeight={"bold"}>{data.telefontider.weekend_tider}</Text>
                </Flex>
                <Text as="i" fontSize={"xxs"}>Frokostlukket hver dag kl 12:30-13:00</Text>
            </Box>
        </Box>
        <Flex as="article" justifyContent={"center"} alignItems="center" gap="1rem" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
            <Icon color="brand.redCta" w={8} h={8} as={BsEnvelope} />
            <Heading as="h3" size="heading5">{data.mail}</Heading>
        </Flex>
    </Box>
  )
}
