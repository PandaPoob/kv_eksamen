import React from 'react'
import { Box, Flex, Text, Divider, Link, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import url from "../../api/url";
import {SlArrowRight} from "react-icons/sl";

export default function LinkBanner({data}) {

    const bannerData = data
    const bannerDataArr = Object.entries(bannerData).map((e) => ({
      id: e[0],
      item: e[1],
    }));
  
    //remove empty entries (false)
    const cleanBannerDataArr = bannerDataArr.filter((t) => t.item !== false);

    const dividerOrientation = useBreakpointValue({ base: "horizontal", md: "vertical" })

  return (
    <Box as="section" display={{ base: "grid", md: "flex" }} bg={"brand.lightGrey"} justifyContent="space-evenly" gap="1rem" py="2rem" flexWrap={"wrap"}>
    {cleanBannerDataArr.map((bLink)=> (
      <>
        <LinkWrapper key={bLink.id} data={bLink.item}> 
            <Text fontWeight={"semibold"}>{bLink.item.navn}</Text>
            <SlArrowRight/> 
        </LinkWrapper>
        <Divider height={{ base: "0", md: "2rem" }} width={{ base: "90vw", md: "0" }} borderColor={"brand.blueCta"} orientation={dividerOrientation} />
      </>
    ))}
  </Box>
  )
}
export const LinkWrapper = ({data, children}) => {
    if(data.samepagelink === "Ja") return <Link href={`${data.link}`} display="flex" gap="1rem" alignItems={"center"}>{children} </Link>
    else if (data.samepagelink === "Nej") return <NextLink href={`${data.link}`} passHref><Link variant={"clean"} gap="1rem" alignContent={"center"}>{children}</Link></NextLink>
}