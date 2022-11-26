import { Link, Box, Heading, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

function BilledeBox({ info }) {
  return (
    <Box
      position="relative"
      h={"100%"}
      width={"100%"}
      maxW={"70ch"}
      mx={"1rem"}
    >
      <Image
        src={info.billede}
        alt={info.alt}
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
}

export default BilledeBox;
