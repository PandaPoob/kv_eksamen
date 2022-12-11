import { Box, Text, Divider, Link, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { Fragment } from "react";

export default function Banner({ bannerData }) {
  let bannerdata = [
    {
      name: "Jeg har fundet en kat",
      urlEndpoint: "/indberetning/fundet-kat",
    },
    {
      name: "Jeg har mistet en kat",
      urlEndpoint: "/efterlysning/mistet-kat",
    },
    {
      name: "Bestil tid hos Katteklinikken",
      urlEndpoint: "/katteklinikker",
    },
    {
      name: "Jeg kan ikke beholde min kat",
      urlEndpoint: "/indlevering-af-kat",
    },
  ];

  const dividerOrientation = useBreakpointValue({
    base: "horizontal",
    md: "horizontal",
    lg: "vertical",
  });

  return (
    <Box
      as="section"
      display={"grid"}
      bg={{ lg: "brand.lightGrey" }}
      alignItems="center"
      gridTemplateColumns={{ lg: "1fr 2px 1fr 2px 1fr 2px 1fr" }}
      gap={{ base: "0.2rem", lg: "0.1rem" }}
      py={{ base: "0", lg: "1rem" }}
    >
      {bannerdata.map((bLink, index) => (
        <Fragment key={index}>
          <NextLink key={bLink.name} href={`${bLink.urlEndpoint}`} passHref>
            <Link
              variant={"inLink"}
              display="flex"
              gap={{ base: "1rem", lg: "0.2rem", xl: "2rem" }}
              alignItems={"center"}
              justifyContent={{ base: "space-between", lg: "center" }}
              bg="brand.lightGrey"
              py={{ base: "2rem", lg: "2rem" }}
              px={{ base: "1rem", lg: "0" }}
            >
              <Text>{bLink.name}</Text>
              <BsChevronRight />
            </Link>
          </NextLink>
          {index !== 3 ? (
            <Divider
              height={{ base: "0", lg: "4rem" }}
              width={{ base: "90vw", lg: "0" }}
              borderColor={"brand.blueCta"}
              display={{ base: "none", lg: "block" }}
              orientation={dividerOrientation}
            />
          ) : null}
        </Fragment>
      ))}
    </Box>
  );
}
