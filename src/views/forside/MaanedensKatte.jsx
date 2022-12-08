import { Box, Heading, Text, Flex, Divider, Link } from "@chakra-ui/react";
import SelectedCatArticle from "./SelectedCatArticle";
import NextLink from "next/link";
import url from "../../api/url";
import { Fragment } from "react";

export default function MaanedensKatte({ katteData }) {
  let maanedensKatte = katteData.filter((e) => {
    return e.acf.udvalgt === true;
  });

  return (
    <Box
      as="section"
      display="grid"
      py={{ base: "3rem", lg: "6rem" }}
      px="1rem"
      gap="1rem"
      bgColor={"brand.lightGrey"}
      placeContent={"center"}
    >
      <Heading as="h2" size={"heading2"} textAlign="center">
        Månedens katte
      </Heading>
      <Text textAlign="center">
        Månedens katte er katte som har særligt udmærket sig i løbet af den
        forhenværende måned.
      </Text>
      <Box
        display={"grid"}
        gap="1rem"
        my={{ base: "1rem", lg: "3rem" }}
        gridTemplateColumns={{ base: "1fr", lg: "20fr 1fr 20fr" }}
        gridTemplateRows={{ lg: "1fr" }}
        width={{
          base: "container.base",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        {maanedensKatte.map((e, index) => (
          <Fragment key={index}>
            {index == 1 && (
              <Divider
                display={"flex"}
                justifySelf="center"
                borderColor={"brand.borderGray"}
                borderWidth="1px"
                orientation={"vertical"}
                height="100%"
              />
            )}
            <SelectedCatArticle {...e} />
          </Fragment>
        ))}
      </Box>
      <NextLink href={`${url}adoptionskatte`}>
        <Link
          width={"12rem"}
          mx="auto"
          my="2rem"
          justifyContent="center"
          variant={"blueBtn"}
        >
          {" "}
          Se alle katte
        </Link>
      </NextLink>
    </Box>
  );
}
