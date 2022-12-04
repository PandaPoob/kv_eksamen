import React from 'react'
import { Box, Flex, Heading, Icon, Divider, Text } from '@chakra-ui/react'
import { BsTelephone, BsEnvelope } from "react-icons/bs";

export default function Telefontider({data, tlfnr}) {
    const telefontider = data;
    const telefontiderArr = Object.entries(telefontider).map((e) => ({
        id: e[0],
        tider: e[1],
    }));

  //remove empty entries (false)
  const cleanTelefontiderArr = telefontiderArr.filter((t) => t.tider !== false);

  return (
    <Box as="article" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
            <Flex gap="1rem" alignItems={"center"} pb="1rem" justifyContent={"center"}>
                <Icon color="brand.redCta" w={8} h={8} as={BsTelephone} />
                <Heading as={"h3"} size="heading4">{tlfnr}</Heading>
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
                {data.frokostpause !== "" ? 
                <Text>{data.frokostpause}</Text> : <></>}
            </Box>
        </Box>
  )
}
