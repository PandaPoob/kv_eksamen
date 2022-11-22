import { Box, Flex, Text, Divider, Link, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import url from "../../api/url";
import SlArrowRight from "react-icons/bs";


export default function Banner(props){
    return (
      <Box display={{ base: "grid", md: "flex" }} bg={"brand.lightGrey"} justifyContent="space-evenly" gap="1rem" py="2rem" flexWrap={"wrap"}>
        <NextLink href={`${url}efterlysning/efterlys-kat`} passHref>
          <Link variant={"clean"}>
            <Text fontWeight={"semibold"}>Jeg har fundet en kat</Text>
          </Link>
        </NextLink>
        <Divider height={{ base: "0", md: "2rem" }} width={{ base: "90vw", md: "0" }} borderColor={"brand.blueCta"} orientation={useBreakpointValue({ base: "horizontal", md: "vertical" })} />
        <NextLink href={`${url}efterlysning/mistet-kat`} passHref>
          <Link variant={"clean"}>
            <Text fontWeight={"semibold"}>Jeg har mistet en kat</Text>
          </Link>
        </NextLink>
        <Divider height={{ base: "0", md: "2rem" }} width={{ base: "90vw", md: "0" }} borderColor={"brand.blueCta"} orientation={useBreakpointValue({ base: "horizontal", md: "vertical" })} />
        <NextLink href={`${url}efterlysning/efterlys-kat`} passHref>
          <Link variant={"clean"}>
            <Text fontWeight={"semibold"}>Bestil tid hos Katteklinikken</Text>
          </Link>
        </NextLink>
        <Divider height={{ base: "0", md: "2rem" }} width={{ base: "90vw", md: "0" }} borderColor={"brand.blueCta"} orientation={useBreakpointValue({ base: "horizontal", md: "vertical" })} />
        <NextLink href={`${url}efterlysning/efterlys-kat`} passHref>
          <Link variant={"clean"}>
            <Text fontWeight={"semibold"}>Jeg kan ikke beholde min kat</Text>
          </Link>
        </NextLink>
      </Box>
    );
}