import React from 'react'
import { Box, Heading, Flex } from "@chakra-ui/react";
import PageLayout from '../../components/layout/PageLayout';
import PageHead from '../../components/layout/PageHead';
import SplashHeader from '../../components/generics/SplashHeader';
import FaaSucessBox from './FaaSucessBox';
import PraktiskInfoBox from './PraktiskInfoBox';
import GodeRaad from './GodeRaad';

import BilledBox from './BilledBox';

export default function BlivPlejefamilie({sideData, imgData}) {

  const acf = imgData.acf
  return (
    <PageLayout>
        <PageHead {...sideData}/>
        <SplashHeader {...sideData}/>
        <Box as='section' px="1rem" py={{base: "3rem", lg: "6rem"}} display={"grid"} placeContent="center">
          <Box display={"grid"} gridTemplateColumns={{md: "1fr 1fr"}} maxW="container.xl" gap={{base: "2rem", lg: "4rem"}}>
            <FaaSucessBox/>
            <PraktiskInfoBox/>
          </Box>
        </Box>
        <Box as='section' bg="brand.lightGrey" px="1rem" py={{base: "3rem", lg: "6rem"}} display={"grid"} >
          <Box display={"grid"} gridTemplateColumns={{base: "1fr", md: "1fr 1fr"}} maxW="container.xl" m="auto" gap={{base: "2rem", lg: "4rem"}}>
            <GodeRaad/>
            <BilledBox acf={acf}/>      
          </Box>
        </Box>
    </PageLayout>
  )
}
