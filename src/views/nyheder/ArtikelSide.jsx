import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

function ArtikelSide({ nyhedsData }) {
  const { titel, undertitel, featuredimage, dato } = nyhedsData.acf;

  return (

    <Box>
      <Heading as="h1" size="heading1">
        {titel}
      </Heading>
      <Text>{undertitel}</Text>
      <Text>{dato}</Text>
      <Box position={"relative"} maxW="800px" height={"auto"}>
          <Image src={featuredimage} alt={titel} layout="fill" objectFit={"cover"} />
        </Box> 
    </Box>
  );
}

export default ArtikelSide;
