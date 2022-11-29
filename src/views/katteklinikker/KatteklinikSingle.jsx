import React from 'react'
import PageLayout from '../../components/layout/PageLayout'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Kliniksplash from './Kliniksplash';
import KlinikBanner from './KlinikBanner';
import KlinikIntroSektion from './KlinikIntroSektion';
import KlinikKontaktinfo from './KlinikKontaktinfo';
import Prisliste from './Prisliste';

export default function KatteklinikSingle({klinikData}) {
    const acf = klinikData.acf;

  return (
    <PageLayout>
        <Kliniksplash acf={acf}/>
        <KlinikBanner acf={acf}/>
        <KlinikIntroSektion  acf={acf}/>
        <KlinikKontaktinfo acf={acf}/>
        <Prisliste acf={acf} />
    </PageLayout>
  )
}
