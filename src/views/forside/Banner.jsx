import { Box, Flex, Text, Divider, Link, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import url from "../../api/url";
import {SlArrowRight} from "react-icons/sl";


export default function Banner({bannerData}){
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
     urlEndpoint: "katteklinikker"
   },
   {
     name: "Jeg kan ikke beholde min kat",
     urlEndpoint: "efterlysning/mistet-kat"
   },
 ]
  
  const dividerOrientation = useBreakpointValue({ base: "horizontal", md:"horizontal", lg: "vertical" })

    return (
      <Box as="section" display={{ base: "grid", lg: "flex" }} bg={"brand.lightGrey"} justifyContent="space-evenly" gap="1rem" py="2rem" flexWrap={"wrap"}>
        {bannerdata.map((bLink, index)=> (
          <>
            <NextLink key={bLink.name} href={`${bLink.urlEndpoint}`} passHref>
              <Link variant={"clean"} gap="1rem" alignItems={"center"}>
                <Text fontWeight={"semibold"}>{bLink.name}</Text>
                <SlArrowRight/> 
              </Link>
            </NextLink>
            {index !== 3 ? 
            <Divider height={{ base: "0", lg: "2rem" }} width={{ base: "90vw", lg: "0" }} borderColor={"brand.blueCta"} orientation={dividerOrientation} />
          :
          <></>
          }
            </>
        ))}
      </Box>
    );
}