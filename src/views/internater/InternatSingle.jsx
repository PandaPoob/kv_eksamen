import React from 'react'
import PageLayout from '../../components/layout/PageLayout'
import KISplash from '../../components/klinikker+internater/KISplash'
import Teamet from '../../components/klinikker+internater/Teamet'
import LinkBanner from './LinkBanner';
import KontaktSektion from './KontaktSektion';

export default function InternatSingle({internatData, MedarbejdData}) {
  const acf = internatData.acf;
  return (
    <PageLayout>
        <KISplash acf={acf}/>
        <LinkBanner data={acf.banner}/>
       
        <Teamet by={acf.bynavn} MedarbejdData={MedarbejdData}/>
        <KontaktSektion/>
    </PageLayout>
  )
}
