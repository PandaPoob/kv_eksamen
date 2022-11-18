import {Box, Heading, Text, Flex, Link} from "@chakra-ui/react"
import {Image, NextLink} from "next/image";
import TestImage from "./billy.jpg"

export default function SplashHeader({overskrift, undertekst, splashbillede, buttontekst, buttonurl, tekstlink}){
    //location of overlay should switch from left=0 or left=50%
    //src, Heading, Text and Link is received as data and should be props
    return (
      <Box position="relative" height={"80vh"} width={"100vw"} overflow="hidden">
        <Image src={splashbillede} alt="test-image" layout="fill" objectFit="cover" />
        <Box position="absolute" top={"0"} left={["0", "0", "0", "50%", "50%"]} width={["100%", "100%", "100%", "50%", "50%"]} height={"100%"} bgColor="brand.darkGrey" opacity={"50%"}></Box>
        <Flex width={["100%", "100%", "100%", "50%", "50%"]} position="absolute" left={["0", "0", "0", "50%", "50%"]} top="30%" align={"center"} justify="center" direction={"column"} color="brand.white">
          <Heading as={"h1"}>{overskrift}</Heading>
          <Text>{undertekst}</Text>
          <NextLink href={buttonurl} passHref legacyBehavior>
            <Link variant={"blueBtn"}>{buttontekst}</Link>
          </NextLink>
        </Flex>
      </Box>
    );
}

