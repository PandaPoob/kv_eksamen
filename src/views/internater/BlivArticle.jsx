import React from 'react'
import { Box, Flex, Heading, Text, Link, Divider } from '@chakra-ui/react'
import NextLink from "next/link";

export default function BlivArticle({item}) {
   
  return (
    <Box display={"grid"} gap="1rem" bg={"brand.white"} minH="22rem" borderRadius="0.3rem" boxShadow={"md"}p="2rem">
        <Heading as={"h3"} size="heading3">{item.overskrift}</Heading>
        <Divider/>
        <Text>{item.brodtekst}</Text>
        <Flex justifyContent={"center"} gap="1rem" mt={{base: "1rem", lg: "2rem"}}>
            {item.overskrift === "Bliv plejefamilie" ? 
            <NextLink href="/gor-en-forskel/bliv-plejefamilie" passHref><Link variant={"blueBtn"}>Læs mere</Link></NextLink>
            :
            <></>
            }
            {item.status === "Ja" ? 
            <Link href="#kontaktos" variant={"redBtn"}>Kontakt os</Link>
            :
            <></>
            }
        </Flex>
    </Box>
  )
}
