import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

function BilledeBox({ info }) {
  return (
    <>
      <Box
        position="relative"
        h={"100%"}
        minH="24rem"
        maxW={"70ch"}
        minW={{ lg: "40rem" }}
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
      {info.billedtekst !== "" ? (
        <Text
          px={"1.1rem"}
          pt={"0.4rem"}
          bg={"brand.white"}
          maxW={"45rem"}
          borderBottomRadius="0.2rem"
          fontSize="xxs"
        >
          {info.billedtekst}
        </Text>
      ) : null}
    </>
  );
}

export default BilledeBox;
