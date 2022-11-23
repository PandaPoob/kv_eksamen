import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react"
import Image from "next/image";
import NextLink from "next/link"

function SplashHeader({acf, imgPos = "center"}) {
    //location of overlay should switch from left=0 or left=50%
    //src, Heading, Text and Link is received as data and should be props
    const buttonChecker = () => {
        if (acf.buttonurl === "") {
            return false;
        } else {
            return true;
        }
    }
    
    return (
      <Box position="relative" height={{base:"80vh", lg: "70vh"}} width={"100vw"} overflow="hidden" backgroundImage={acf.splashbillede} bgPosition={imgPos} bgSize="cover">
        {/* <Image src={acf.splashbillede} alt="test-image" layout="fill" objectFit="cover" /> */}
        <Box position="absolute" top={"0"} width="100%" height={"100%"} bgColor="brand.darkGrey" opacity={"50%"}></Box>
        <Flex
          width={["auto", "auto", "auto", "50%", "50%"]}
          position="absolute"
          left={["0", "0", "0", "50%", "50%"]}
          top="30%"
          align={"left"}
          justifyContent="center"
          direction={"column"}
          color="brand.white"
          gap="1rem"
          py={"2rem"}
          px="2rem"
        >
          <Heading as={"h1"} size="heading1">
            {acf.overskrift}
          </Heading>
          <Text>{acf.undertekst}</Text>
          {buttonChecker() && (
            <NextLink href={""} passHref>
              <Link maxW={"10rem"} justifyContent="center" variant={"blueBtn"}>{acf.buttontekst}</Link>
            </NextLink>
          )}
        </Flex>
      </Box>
    );
}
         

export default SplashHeader;