import { Box, Flex, Text, Divider, Link, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import url from "../../api/url";
import {SlArrowRight} from "react-icons/sl";


export default function Banner(props){

  let bannerdata = [
    {
      name: "Jeg har fundet en kat",
      urlEndpoint: "efterlysning/efterlys-kat"
    },
    {
      name: "Jeg har mistet en kat",
      urlEndpoint: "efterlysning/mistet-kat"
    },
    {
      name: "Bestil tid hos Katteklinikken",
      urlEndpoint: "efterlysning/mistet-kat"
    },
    {
      name: "Jeg kan ikke beholde min kat",
      urlEndpoint: "efterlysning/mistet-kat"
    },
  ]
  const dividerOrientation = useBreakpointValue({ base: "horizontal", md: "vertical" })

    return (
      <Box display={{ base: "grid", md: "flex" }} bg={"brand.lightGrey"} justifyContent="space-evenly" gap="1rem" py="2rem" flexWrap={"wrap"}>
        {bannerdata.map((bLink)=> (
          <>
            <NextLink key={bLink.name} href={`${url}${bLink.urlEndpoint}`} passHref>
              <Link variant={"clean"} gap="1rem">
                <Text fontWeight={"semibold"}>{bLink.name}</Text>
                <SlArrowRight/> 
              </Link>
            </NextLink>
            <Divider height={{ base: "0", md: "2rem" }} width={{ base: "90vw", md: "0" }} borderColor={"brand.blueCta"} orientation={dividerOrientation} />
          </>
        ))}
    
      </Box>
    );
}