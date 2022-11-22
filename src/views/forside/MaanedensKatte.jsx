import { Box, Heading, Text, Flex, Divider, Link } from "@chakra-ui/react";
import SelectedCatArticle from "./SelectedCatArticle";
import NextLink from "next/link";
import url from "../../api/url";


export default function MaanedensKatte({katteData}){

    let maanedensKatte = katteData.filter((e) => {
      return e.acf.udvalgt === true;
    });
  
    return (
      <Box as="section" display="grid" py={"3rem"} px="1rem" gap="1rem" bgColor={"brand.lightGrey"}>
        <Heading as="h2" size={"heading2"} textAlign="center">
          Månedens katte
        </Heading>
        <Text textAlign="center">Månedens katte er katte som har særligt udmærket sig i løbet af den forhenværende måned.</Text>
        <Box display={"grid"} gap="1rem" my="1rem" gridTemplateColumns={{ base: "1fr", lg: "4fr 1fr 4fr" }} gridTemplateRows={{ lg: "1fr" }}>
          {maanedensKatte.map((e, index) => (
            <>
              {index == 1 && <Divider key={index} display={"flex"} justifySelf="center" borderColor={"brand.blueCta"} orientation={"vertical"} height="100%" />}
              <SelectedCatArticle key={e.id} {...e} />
            </>
          ))}
        </Box>
        <NextLink href={`${url}adoptionskatte`}>
          <Link maxW={"12rem"} mx="auto" my="2rem" justifyContent="center" variant={"blueBtn"}> Se alle katte</Link>
        </NextLink>
      </Box>
    );
}