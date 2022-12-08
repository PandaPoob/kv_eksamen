import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { ImDiamonds } from "react-icons/im";

export default function SelectedCatArticle({ acf, id }) {
  return (
    <NextLink href={`/adopter/adoptionskatte/${id}`} passHref>
      <Link variant={"clean"} display="grid" overflow={"hidden"}>
        <Box
          position="relative"
          display={"grid"}
          gridTemplateRows="repeat(7, 1fr)"
          overflow={"hidden"}
          minH="22rem"
          transition="all 0.2s ease-in"
          _hover={{
            transform: "scale(1.02)",
          }}
        >
          <Image
            gridrow={"span"}
            src={acf.profil_billede}
            alt={acf.navn}
            layout="fill"
            objectFit={"cover"}
          />
          <Flex
            position={"absolute"}
            gridRow={"6/7"}
            width="10rem"
            justifyContent={"space-evenly"}
            padding={"8px"}
            bgColor={"brand.blueCta"}
            borderRadius="2px"
            color="brand.white"
            gap="1rem"
            alignItems={"center"}
          >
            <Text>{acf.navn}</Text>
            <Icon as={ImDiamonds} width="1rem" height="1rem"></Icon>
            <Text>{acf.miljo}</Text>
          </Flex>
        </Box>
      </Link>
    </NextLink>
  );
}
