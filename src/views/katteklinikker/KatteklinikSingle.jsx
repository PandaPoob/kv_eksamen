import React from 'react'
import PageLayout from '../../components/layout/PageLayout'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import KlinikBanner from './KlinikBanner';
import KlinikIntroSektion from './KlinikIntroSektion';
import KlinikKontaktinfo from './KlinikKontaktinfo';
import Prisliste from './Prisliste';
import Teamet from '../../components/klinikker+internater/Teamet';
import HighlightSektion from './HighlightSektion';
import KISplash from '../../components/klinikker+internater/KISplash';

export default function KatteklinikSingle({klinikData, MedarbejdData}) {
    const acf = klinikData.acf;

  return (
    <PageLayout>
        <KISplash acf={acf}/>
        <KlinikBanner acf={acf}/>
        <KlinikIntroSektion  acf={acf}/>
        <KlinikKontaktinfo acf={acf}/>
        <Prisliste acf={acf} />
        <Teamet by={acf.bynavn} MedarbejdData={MedarbejdData}/>
        <HighlightSektion acf={acf}/>
    </PageLayout>
  )
}
