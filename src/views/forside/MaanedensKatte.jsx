import { Box, Heading, Text, Flex, Divider } from "@chakra-ui/react";
import SelectedCatArticle from "./SelectedCatArticle";


export default function MaanedensKatte({katteData}){

    let maanedensKatte = katteData.filter((e) => {
      return e.acf.udvalgt === true;
    });
  
    return (
      <Box as="section" display="grid" py={"2rem"} px="1rem" gap="1rem" bgColor={"brand.lightGrey"}>
        <Heading as="h2" size={"heading2"} textAlign="center">
          Månedens katte
        </Heading>
        <Text textAlign="center">Månedens katte er katte som har særligt udmærket sig i løbet af den forhenværende måned.</Text>
        <Box display={"grid"} gap="1rem" gridTemplateColumns={{ base: "1fr", lg: "4fr 1fr 4fr" }} gridTemplateRows={{ lg: "1fr" }}>
          {maanedensKatte.map((e, index) => (
            <>
              {index == 1 && <Divider display={"flex"} justifySelf="center" borderColor={"brand.blueCta"} orientation={"vertical"} height="100%" />}
              <SelectedCatArticle key={e.acf.navn} {...e} />
            </>
          ))}
        </Box>
      </Box>
    );
}