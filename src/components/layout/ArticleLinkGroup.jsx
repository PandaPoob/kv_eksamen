import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react';
import NextLink from "next/link";

export default function ArticleLinkGroup({data}) {
  return (
    <Box display={"grid"} gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }} gap="1rem" py="2rem" maxW="container.lg">
      {data.map((a) => (
        <NextLink key={a.name} href={a.urlEndpoint} passHref>
          <Link variant={"greyArticle"}>
            {a.icon}
            <Text as="h3" fontSize="xs" fontWeight={"bold"}>
              {a.name}
            </Text>
          </Link>
        </NextLink>
      ))}
    </Box>
  );
}
