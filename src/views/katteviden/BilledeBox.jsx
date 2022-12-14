import { Box, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

function BilledeBox({ info }) {
  return (
    <>
      <Box
        position="relative"
        h={"100%"}
        minH="24rem"
        maxW={"70ch"}
        minW={{ xl: "40rem" }}
        borderRadius="0.2rem"
        overflow="hidden"
      >
        <Image
          src={info.billede}
          alt={info.alt}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      {info.billedtekst_er_link ? (
        <NextLink href={info.link} passHref prefetch={false}>
          <Link
            variant={"exLink"}
            px={"1.1rem"}
            py={"0.4rem"}
            bg={"brand.white"}
            maxW={"45rem"}
            borderBottomRadius="0.2rem"
            fontSize="xxs"
            color={"brand.blue"}
            isExternal
          >
            {info.billedtekst}
          </Link>
        </NextLink>
      ) : info.billedtekst !== "" ? (
        <Text
          px={"1.1rem"}
          pt={"0.4rem"}
          bg={"brand.white"}
          maxW={"45rem"}
          borderBottomRadius="0.2rem"
          fontSize="xxs"
          color={"brand.blue"}
        >
          {info.billedtekst}
        </Text>
      ) : null}
    </>
  );
}

export default BilledeBox;
