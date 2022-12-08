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
  const cleanTelefontiderArr = telefontiderArr.filter((t) => t.tider !== false && t.tider.dage !== "" && t.id !== "frokostpause" && t.id !== "administration");
  

  return (
    <Box as="article" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
      <Box py="1rem" display="grid" gap="1rem">
        <Heading as="h3" size="heading4">
          Telefontider:
        </Heading>
        {cleanTelefontiderArr.map((t) => (
          <Box key={t.id} display="grid" gridTemplateColumns={"1fr 1fr"}>
            <Text>{t.tider.dage}:</Text>
            <Text color="brand.darkGrey" fontWeight={"semibold"} placeSelf="end">
              {t.tider.tider}
            </Text>
          </Box>
        ))}
        {data.frokostpause !== "" ? <Text>{data.frokostpause}</Text> : <></>}
      </Box>
      <Divider borderColor={"brand.borderGray"} mb="1.5rem"></Divider>
      <Flex gap="1rem" alignItems={"center"} pb="1rem" justifyContent={"center"}>
        <Icon color="brand.redCta" w={8} h={8} as={BsTelephone} />
        <Heading as={"h3"} size="heading4">
          {tlfnr}
        </Heading>
      </Flex>

      <Box>
        <Divider borderColor={"brand.borderGray"} mb="1.5rem"></Divider>
        <Heading as="h4" size="heading4" mb="1rem">
          Administrationen
        </Heading>
        <Text>Administrationen ligger i Kattens Værns afdeling i Brøndby og deres telefon har åbent man-tors 10:00-15.00 og fredag 10:00-14:00 </Text>
      </Box>
    </Box>
  );
}
