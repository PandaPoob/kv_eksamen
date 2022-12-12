import React from 'react'
import { Box, Flex, Text, Heading, Icon, Divider } from '@chakra-ui/react'
import { BsTelephone, BsEnvelope } from "react-icons/bs";

export default function TelefonMailSektion({data}) {
  
    const telefontider = data.telefontider
    const telefontiderArr = Object.entries(telefontider).map((e) => ({
        id: e[0],
        tider: e[1],
    }));

  //remove empty entries (false)
  const cleanTelefontiderArr = telefontiderArr.filter((t) => t.tider !== false && t.tider.dage !== "");

  return (
    <Box display="grid" gap="1rem">
      <Box as="article" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
        <Box pb="1rem" display="grid" gap="1rem">
          <Heading as="h3" size="heading4">
            Telefontider:
          </Heading>
          {cleanTelefontiderArr.map((t) => (
            <Box key={t.id} display="grid" gridTemplateColumns={"1fr 1fr"}>
              <Text fontSize={{ base: "xxs", md: "xs" }}>{t.tider.dage}:</Text>
              <Text fontSize={{ base: "xxs", md: "xs" }} color="brand.darkGrey" fontWeight={"bold"} placeSelf="end">
                {t.tider.tider}
              </Text>
            </Box>
          ))}
          <Text as="i" fontSize={"xxs"}>
            Frokostlukket hver dag kl 12:30-13:00
          </Text>
        </Box>
        <Divider borderColor={"brand.borderGray"} my="1.5rem"></Divider>
        <Flex gap="1rem" alignItems={"center"} pb="1rem" justifyContent={"center"}>
          <Icon color="brand.redCta" w={8} h={8} as={BsTelephone} />
          <Heading as={"h3"} size="heading4">
            {data.telefonnummer}
          </Heading>
        </Flex>
      </Box>
      <Flex as="article" justifyContent={"center"} alignItems="center" gap="1rem" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
        <Icon color="brand.redCta" w={8} h={8} as={BsEnvelope} />
        <Heading as="h3" size="heading5">
          {data.mail}
        </Heading>
      </Flex>
    </Box>
  );
}
