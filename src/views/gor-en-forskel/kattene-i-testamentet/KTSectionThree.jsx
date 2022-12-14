import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function KTSectionThree({ acf }) {
  return (
    <Box
      display={"grid"}
      placeContent="center"
      px="1rem"
      py={{ base: "3rem", md: "6rem" }}
    >
      <Box
        position={"relative"}
        boxShadow="md"
        width={{ base: "20.3125rem", md: "25.3125rem", lg: "50.625rem" }}
        height={{ base: "31.125rem", md: "36.125rem", lg: "72.25rem" }}
      >
        <Image
          src={acf.img2}
          alt="infografik"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}
