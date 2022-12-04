import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react';
import NextLink from "next/link";

export default function ArticleLinkGroup({data, lgGrid = "repeat(4, 1fr)"}) {
  return (
    <>
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
    </>
  );
}
