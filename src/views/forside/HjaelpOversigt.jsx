import React from 'react'
import { Box, Link, Text, Heading } from '@chakra-ui/react';
import { BsHeart } from 'react-icons/bs';
import {IoPawOutline, IoHomeOutline, IoMegaphoneOutline, IoAlertCircleOutline} from "react-icons/io5";
import {HiOutlineClock} from "react-icons/hi"
import NextLink from "next/link";
import url from "../../api/url";

export default function HjaelpOversigt() {

    let OversigtData = [
        {
          name: "Jeg har fundet en kat",
          urlEndpoint: "efterlysning/efterlys-kat",
          icon: <IoAlertCircleOutline  size={60} color="#D43B4D"/>,
        },
        {
          name: "Jeg har mistet en kat",
          urlEndpoint: "efterlysning/mistet-kat",
          icon: <IoMegaphoneOutline  size={60} color="#D43B4D"/>,
        },
        {
          name: "Jeg kan ikke beholde min kat",
          urlEndpoint: "efterlysning/mistet-kat",
          icon: <IoHomeOutline  size={60} color="#D43B4D"/>,
        },
        {
          name: "Bestil tid hos Katteklinikken",
          urlEndpoint: "efterlysning/mistet-kat",
          icon: <HiOutlineClock size={60} color="#D43B4D"/>,
        },
        {
          name: "Adoptér en kat",
          urlEndpoint: "adopter/adoptionskatte",
          icon: <IoPawOutline size={60} color="#D43B4D"/>,
        },
        {
          name: "Støttemuligheder",
          urlEndpoint: "adopter/adoptionskatte",
          icon: <BsHeart size={60} color="#D43B4D"/>,
        },
      ]

  return (
    <Box as="section" display="grid" py={{base:"3rem", lg: "6rem"}} px="1rem" gap="1rem" bgColor={"brand.white"} placeContent={"center"} >
        <Heading as={"h2"} size="heading2" textAlign={"center"}>Brug for hjælp?</Heading>
        <Box display={"grid"} gridTemplateColumns={{base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)"}} gap="1rem" py="2rem" maxW="container.lg">
            {OversigtData.map((a) => (
                <NextLink key={a.name} href={`${url}${a.urlEndpoint}`} passHref>
                    <Link variant={"clean"} flexDirection="column"  as="article" bgColor="brand.lightGrey" width={"20rem"} height="12rem" p={"2rem"} justifyContent="space-evenly" borderRadius="0.3rem">
                        {a.icon}
                        <Text as="h3" fontSize="xs" fontWeight={"bold"}>{a.name}</Text>
                    </Link>
                </NextLink>
            ))}
        </Box>
    </Box>
  )
}
