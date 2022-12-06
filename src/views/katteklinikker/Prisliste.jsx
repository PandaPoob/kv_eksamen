import React from 'react'
import { Box, Flex, Text, Heading, Link, Icon, Divider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Prisliste({acf}) {

    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }
      useEffect(() => {
        window.addEventListener("resize", handleResize)
      })

  return (
    <Box as="section" display="grid" placeContent={"center"} py={{ base: "3rem", lg: "6rem" }} px="1rem">
      <Box maxW={"container.lg"}>
        <Heading as="h2" size="heading2">
          Prisliste
        </Heading>
        {isMobile ? (
          <Box as="section" display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="3rem" alignItems={"start"} py="3rem">
            <Box position={"relative"} height="61rem" width={"22rem"} boxShadow="md">
              <Image src={acf.prisliste.prisliste_mobile_1} alt="prisliste" layout="fill" objectFit="contain" />
            </Box>
            <Box position={"relative"} height="61rem" width={"22rem"} boxShadow="md">
              <Image src={acf.prisliste.prisliste_mobile_2} alt="prisliste" layout="fill" objectFit="contain" />
            </Box>
          </Box>
        ) : (
          <Box as="section" display="grid" gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="3rem" alignItems={"start"} py="3rem">
            <Box position={"relative"} height="35rem" width="28rem" boxShadow="md">
              <Image src={acf.prisliste.prisliste_web_1} alt="prisliste" layout="fill" objectFit="cover" />
            </Box>
            <Box position={"relative"} height="35rem" width="28rem" boxShadow="md">
              <Image src={acf.prisliste.prisliste_web_2} alt="prisliste" layout="fill" objectFit="cover" />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}



 
//choose the screen size 


// create an event listener
