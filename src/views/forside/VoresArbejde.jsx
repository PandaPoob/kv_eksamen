import { Box, Heading, Flex, useBreakpointValue, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import infoGrafikDesk from "../../assets/images/infografik-desk.webp";
import infoGrafikMob from "../../assets/images/infografik-mobile.webp";

export default function VoresArbejde(props) {
  return (
    <Box as="section" py={{ base: "6rem", lg: "6rem" }} px="1rem">
      <Heading
        as="h2"
        size="heading2"
        textAlign={"center"}
        minW="100%"
        mb={{ base: "2rem", lg: "3rem" }}
      >
        Vores arbejde
      </Heading>
      <Box
        mt={{ base: "2rem", lg: "0" }}
        position="relative"
        minHeight={{ base: "40rem", lg: "18rem" }}
        width={"100%"}
      >
        <Image
          priority="true"
          src={useBreakpointValue({ base: infoGrafikMob, lg: infoGrafikDesk })}
          alt={"Genudsætning"}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Flex justifyContent={"center"} gap="2rem" mt="2rem">
        <NextLink href={`/stottemuligheder`} passHref>
          <Link
            variant={"redBtn"}
            textAlign={"center"}
            mt={"1.5rem"}
            mb={"2rem"}
            justifyContent="center"
          >
            Gør en forskel
          </Link>
        </NextLink>
        <NextLink href={`/om-os/vores-arbejde`} passHref>
          <Link
            variant={"blueBtn"}
            textAlign={"center"}
            mt={"1.5rem"}
            mb={"2rem"}
            justifyContent="center"
          >
            Læs mere
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
}
