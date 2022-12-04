import React from 'react'
import { Box, Heading, Flex } from "@chakra-ui/react";
import PageLayout from '../../components/layout/PageLayout';
import PageHead from '../../components/layout/PageHead';
import SplashHeader from '../../components/generics/SplashHeader';

export default function BlivPlejefamilie({sideData}) {
  return (
    <PageLayout>
        <PageHead {...sideData}/>
        <SplashHeader {...sideData}/>
    </PageLayout>
  )
}
