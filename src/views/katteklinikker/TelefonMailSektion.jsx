import React from 'react'
import { Box, Flex, Text, Heading, Link, Icon, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import { BsTelephone, BsEnvelope } from "react-icons/bs";

export default function TelefonMailSektion({data}) {
  
    const telefontider = data.telefontider
    const telefontiderArr = Object.entries(telefontider).map((e) => ({
        id: e[0],
        tider: e[1],
    }));

  //remove empty entries (false)
  const cleanTelefontiderArr = telefontiderArr.filter((t) => t.tider !== false);

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
                {cleanTelefontiderArr.map((t)=> (
                    <Flex key={t.id} justifyContent={"space-between"} gap="2rem" >
                        <Text>{t.tider.dage}</Text>
                        <Text color="brand.darkGrey" fontWeight={"bold"}>{t.tider.tider}</Text>
                    </Flex>
                ))}
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
