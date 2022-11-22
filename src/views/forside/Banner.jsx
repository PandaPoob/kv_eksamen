import { Box, Flex, Text, Divider, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import url from "../../api/url";
import SlArrowRight from "react-icons/bs";


export default function Banner(props){
    return (
      <Flex bg={"brand.lightGrey"} justifyContent="space-evenly" py="2rem">
        <NextLink href={`${url}efterlysning/efterlys-kat`} passHref>
          <Link variant={"clean"}>
            <Text fontWeight={"semibold"}>Jeg har fundet en kat</Text>
          </Link>
        </NextLink>
        <Divider height={"2rem"} borderColor={"brand.blueCta"} orientation={"vertical"} />
        <NextLink href={`${url}efterlysning/mistet-kat`} passHref>
          <Link variant={"clean"}>
            <Text fontWeight={"semibold"}>Jeg har mistet en kat</Text>
          </Link>
        </NextLink>
        <Divider height={"2rem"} borderColor={"brand.blueCta"} orientation={"vertical"} />
        <NextLink href={`${url}efterlysning/efterlys-kat`} passHref>
          <Link variant={"clean"}>
            <Text fontWeight={"semibold"}>Bestil tid hos Katteklinikken</Text>
          </Link>
        </NextLink>
        <Divider height={"2rem"} borderColor={"brand.blueCta"} orientation={"vertical"} />
        <NextLink href={`${url}efterlysning/efterlys-kat`} passHref>
          <Link variant={"clean"}>
            <Text fontWeight={"semibold"}>Jeg kan ikke beholde min kat</Text>
          </Link>
        </NextLink>
      </Flex>
    );
}