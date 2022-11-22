import { Box, Image, Text, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NewsArticle({acf, id}){
    return (
      <LinkWrapper acf={acf} id={id}>
        <Box bgColor={"brand.white"} borderRadius="5px" width="300px" height={"350px"} color="brand.darkGrey">
          <Image borderTopRadius={"5px"} alt="artikel-billede" src={acf.featuredimage} width="300px" height={"200px"} objectFit="cover" />
          <Box padding={"1rem"}>
            <Heading as="h3" size="heading4">
              {acf.titel}
            </Heading>
          </Box>
        </Box>
      </LinkWrapper>
    );
}

export function LinkWrapper({acf, children, id}) {
    if(acf.eksternlink === true) {
        return <a href={acf.linkurl}>{children}</a>
    } else {
        return (
          <NextLink href={`/nyheder/${id}`} passHref>
            <Link>{children}</Link>
          </NextLink>
        );
    }

}