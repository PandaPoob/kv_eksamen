import React from 'react'
import { Box, Flex, Heading, Icon, Divider, Text } from '@chakra-ui/react'
import { BsTelephone, BsEnvelope } from "react-icons/bs";

export default function Abningstider({data}) {
    const abningstider = data.tiderne;
       const abningstiderArr = Object.entries(abningstider).map((e) => ({
         id: e[0],
         tider: e[1],
       }));
     
       //remove empty entries (false)
       const cleanAbningstiderArr = abningstiderArr.filter((t) => t.tider !== false);
       console.log(cleanAbningstiderArr)
  return (
    <Box as="article" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
            <Box display={"grid"} gap="1rem" pb={"1rem"}>
                <Heading as={"h3"} size="heading4">Åbningstider</Heading>
                <Box>
                    <Text>{data.introtekst}</Text>
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
  )
}
