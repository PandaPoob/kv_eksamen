import { Box, Image, Text, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NewsArticle({acf, id}){
    return (
      <LinkWrapper acf={acf} id={id}>
        <Box
          bgColor={"brand.white"}
          borderRadius="5px"
          width="18rem"
          height={"22rem"}
          color="brand.darkGrey"
          transition="all .2s ease-in-out"
          _hover={{
            transform: "translateY(-0.5rem) translateX(0.2rem)",
          }}
        >
          <Image borderTopRadius={"5px"} alt="artikel-billede" src={acf.featuredimage} width="18rem" height={"10rem"} objectFit="cover" />
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