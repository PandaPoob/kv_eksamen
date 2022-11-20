import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react"
import Image from "next/image";
import NextLink from "next/link"

function SplashHeader({acf}) {
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
      <Box position="relative" height={"70vh"} width={"100vw"} overflow="hidden">
        <Image src={acf.splashbillede} alt="test-image" layout="fill" objectFit="cover" />
        <Box position="absolute" top={"0"} left={["0", "0", "0", "50%", "50%"]} width={["100%", "100%", "100%", "50%", "50%"]} height={"100%"} bgColor="brand.darkGrey" opacity={"50%"}></Box>
        <Flex width={["100%", "100%", "100%", "50%", "50%"]} position="absolute" left={["0", "0", "0", "50%", "50%"]} top="30%" align={"center"} justify="center" direction={"column"} color="brand.white">
          <Heading as={"h1"}>{acf.overskrift}</Heading>
          <Text>{acf.undertekst}</Text>
          {buttonChecker && 
            <NextLink href={""} passHref legacyBehavior>
              <Link variant={"blueBtn"}>{""}</Link>
            </NextLink>
          }
        </Flex>
      </Box>
    );
}
         

export default SplashHeader;