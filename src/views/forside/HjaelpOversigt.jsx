import { Box, Heading } from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";
import {
  IoPawOutline,
  IoHomeOutline,
  IoMegaphoneOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi";
import ArticleLinkGroup from "../../components/layout/ArticleLinkGroup";

export default function HjaelpOversigt() {
  let OversigtData = [
    {
      name: "Jeg har fundet en kat",
      urlEndpoint: "/indberetning/fundet-kat",
      icon: <IoAlertCircleOutline size={60} color="#D43B4D" />,
    },
    {
      name: "Jeg har mistet en kat",
      urlEndpoint: "/efterlysning/mistet-kat",
      icon: <IoMegaphoneOutline size={60} color="#D43B4D" />,
    },
    {
      name: "Jeg kan ikke beholde min kat",
      urlEndpoint: "/efterlysning/mistet-kat",
      icon: <IoHomeOutline size={60} color="#D43B4D" />,
    },
    {
      name: "Bestil tid hos Katteklinikken",
      urlEndpoint: "/katteklinikker",
      icon: <HiOutlineClock size={60} color="#D43B4D" />,
    },
    {
      name: "Adoptér en kat",
      urlEndpoint: "/adopter/adoptionskatte",
      icon: <IoPawOutline size={60} color="#D43B4D" />,
    },
    {
      name: "Støttemuligheder",
      urlEndpoint: "/støttemuligheder",
      icon: <BsHeart size={60} color="#D43B4D" />,
    },
  ];

  return (
    <Box
      as="section"
      display="grid"
      py={{ base: "3rem", lg: "6rem" }}
      px="1rem"
      gap="1rem"
      placeContent={"center"}
    >
      <Heading as={"h2"} size="heading2" textAlign={"center"}>
        Brug for hjælp?
      </Heading>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
        }}
        gap="1rem"
        py="2rem"
        maxW="container.lg"
      >
        <ArticleLinkGroup data={OversigtData} lgGrid="repeat(3, 1fr)" />
      </Box>
    </Box>
  );
}
