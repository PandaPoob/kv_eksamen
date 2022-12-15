import { Box } from "@chakra-ui/react";
import Image from "next/image";

function CarouselImage({ url, alt }) {
  return (
    <Box position="relative" minH={"22rem"} width={"100%"}>
      <Image
        priority="true"
        placeholder={"blur"}
        blurDataURL={url}
        src={url}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
}
0;

export default CarouselImage;
