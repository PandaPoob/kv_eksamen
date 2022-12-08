import React from 'react'
import SplashHeader from '../../components/generics/SplashHeader'
import PageHead from '../../components/layout/PageHead'
import PageLayout from '../../components/layout/PageLayout'
import KTKontaktSection from './KTKontaktSection'
import KTSectionFour from './KTSectionFour'
import KTSectionOne from './KTSectionOne'
import KTSectionThree from './KTSectionThree'
import KTSectionTwo from './KTSectionTwo'

export default function KatteneITestamentet({imgData, sideData}) {
  return (
    <PageLayout>
        <PageHead {...sideData} />
        <SplashHeader h1mobsize='heading2' {...sideData} />
        <KTSectionOne acf={imgData.acf} />
        <KTSectionTwo/>
        <KTSectionThree acf={imgData.acf} />
        <KTSectionFour {...imgData}/>
        <KTKontaktSection/>
    </PageLayout>
  )
}
