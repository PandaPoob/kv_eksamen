import React from 'react'
import PageLayout from '../../components/layout/PageLayout'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Kliniksplash from './Kliniksplash';

export default function KatteklinikSingle({klinikData}) {
    const acf = klinikData.acf;

  return (
    <PageLayout>
        <Kliniksplash acf={acf}/>
    </PageLayout>
  )
}
