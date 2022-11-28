import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react"
import Image from "next/image";
import NextLink from "next/link"

function SplashHeader({acf, imgPos = "center", textPos="left"}) {

    const buttonChecker = () => {
        if (acf.buttonurl === "") {
            return false;
        } else {
            return true;
        }
    }
    const overtekstChecker = () => {

      if (acf.overtekst === "") {
          return false;
      } else {
          return true;
      }
  }

    
    return (
      <Box position="relative" display={"grid"} gridTemplateColumns="1fr 1fr" gridTemplateRows="repeat(3, 1fr)" height={"70vh"} width={"100vw"} overflow="hidden" backgroundImage={acf.splashbillede} bgPosition={imgPos} bgSize="cover">
        <Box position="absolute" top={"0"} width="100%" height={"100%"} bgColor="brand.darkGrey" opacity={"50%"}></Box>
        <Flex
          gridRow="2/3"
          gridColumn={{base: "1/3", lg:"2/3"}}
          zIndex={"1"}
          align={"left"}
          justifyContent="center"
          direction={"column"}
          color="brand.white"
          gap="1rem"
          py={"2rem"}
          px="2rem"
          textAlign={textPos}
        >
          {overtekstChecker() && (
            <Heading as={"h1"} size="sm" px={"5px"}>{acf.overtekst}</Heading>
          )}
          <Heading as={"h1"} size="heading1">
            {acf.overskrift}
          </Heading>
          <Text>{acf.undertekst}</Text>
          {buttonChecker() && (
            <NextLink href={acf.buttonurl} passHref>
              <Link maxW={"10rem"} alignSelf={textPos} justifyContent="center" variant={"blueBtn"}>{acf.buttontekst}</Link>
            </NextLink>
          )}
        </Flex>
      </Box>
    );
}
         

export default SplashHeader;