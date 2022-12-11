import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Carousel from "../../components/features/Carousel";
import CarouselImage from "../../components/generics/CarouselImage";

function GallerySection({ gallery }) {
  //fix what wp couldnt
  const billedArr = Object.entries(gallery).map((e) => ({
    alt: e[0],
    url: e[1],
  }));

  //remove empty entries (false)
  const cleanbilledArr = billedArr.filter((b) => b.url !== false);

  return (
    <Box mb={"4rem"} mx={{ base: "1rem", lg: "4rem" }}>
      {cleanbilledArr.length === 1 ? (
        cleanbilledArr.map((b) => (
          <Box key={b.alt} position="relative" minH={"22rem"} width={"100%"}>
            <Image src={b.url} alt={b.alt} layout="fill" objectFit="cover" />
          </Box>
        ))
      ) : (
        <Carousel
          listData={cleanbilledArr}
          CarouselListItem={CarouselImage}
          perPage={{ base: 1, lg: 2, xl: 3 }}
          perMoveVal={{ base: 1, lg: 1, xl: 1 }}
          customP={{ left: "0rem", right: "8rem" }}
          pos={"start"}
          arrowColor={"brand.blueCta"}
        />
      )}
    </Box>
  );
}

export default GallerySection;
