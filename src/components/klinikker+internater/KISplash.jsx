import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

export default function KISplash({acf}) {
  return (
    <Box position="relative" display={"grid"} gridTemplateColumns="1fr 1fr" gridTemplateRows="repeat(3, 1fr)" height={"60vh"} width={"100vw"} overflow="hidden" backgroundImage={acf.splashbillede} bgPosition={"center"} bgSize="cover">
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
        >
            <Heading as={"h1"} size={{base: "heading2", lg: "heading1"}}>
                {acf.overskrift}
            </Heading>
        </Flex>
  </Box>
  )
}
