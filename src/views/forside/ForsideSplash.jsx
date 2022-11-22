import { Box, Image, Heading, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ForsideSplash({acf}){
    return (
      <Box position="relative" height={"90vh"} width={"100vw"} overflow="hidden" backgroundImage={acf.splashbillede} bgPosition={"center"} bgSize="cover">
        <Box position="absolute" top={"0"} width="100%" height={"100%"} bgColor="brand.darkGrey" opacity={"50%"}></Box>
        <Flex width={["100%", "100%", "100%", "50%", "50%"]} position="absolute" left={"0"} top="30%" align={"left"} direction={"column"} color="brand.white" gap="1rem" py={"2rem"} px="2rem">
          <Text>{acf.overtekst}</Text>
          <Heading as={"h1"} size="heading1">{acf.overskrift}</Heading>
          <Text>{acf.undertekst}</Text>
          <NextLink href={acf.buttonurl} passHref legacyBehavior>
            <Link maxW={"8rem"} justifyContent="center" variant={"blueBtn"}>{acf.buttontekst}</Link>
          </NextLink>
        </Flex>
      </Box>
    );
}